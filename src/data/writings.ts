import { Writing } from './types';

export const WRITINGS: Writing[] = [
  {
    slug: 'building-production-grade-rag',
    date: 'AUG 26',
    readTime: '6 min read',
    title: 'Building Production-Grade RAG: From Chunks to Multi-Agent Graphs',
    description: 'A deep dive into chunking heuristics, retrieval@3 optimization, rerankers, and LangGraph multi-node state cycles.',
    tags: ['RAG', 'LangGraph', 'ChromaDB', 'Vector Search'],
    sections: [
      {
        heading: 'Beyond Naive Vector Search',
        paragraphs: [
          'Most retrieval-augmented generation (RAG) tutorials stop at splitting documents into arbitrary 500-token chunks with a fixed 50-token overlap, dumping them into a vector database, and pulling top-k cosine neighbors. In production, this naive setup breaks almost immediately when confronted with nested tables, policy amendments, or multi-hop domain questions.',
          'When indexing real-world trade and regulatory policies at DGFT, naive chunking resulted in an internal retrieval accuracy of barely 54%. Context was clipped across crucial qualification clauses, and queries with negative constraints ("which items do NOT require import licensing?") retrieved documents containing the positive rule without contextual negation.'
        ]
      },
      {
        heading: 'Heuristic Chunking & Semantic Boundary Preservation',
        paragraphs: [
          'The first major lift came from switching from arbitrary token cuts to layout-aware semantic slicing. By preserving legal hierarchy—chapters, sub-clauses, and tables as cohesive markdown blocks—chunks maintained structural integrity.'
        ],
        bullets: [
          'Header-preserving metadata injection: Every chunk inherits its full parent hierarchy (e.g. Chapter 4 > Section 2 > Exemption List).',
          'Table serialization: Tables are serialized into markdown matrices rather than flattened text tokens, allowing LLMs to parse row-column dependencies reliably.',
          'Hybrid Sparse + Dense indexing: BM25 keyword matching for exact trade codes combined with cosine vector distance on domain-adapted embeddings.'
        ]
      },
      {
        heading: 'Two-Stage Retrieval & Cross-Encoder Reranking',
        paragraphs: [
          'Retrieving top-20 candidates using dense vectors and scoring them with a lightweight cross-encoder (e.g., BGE-Reranker) before feeding the top-3 into the LLM context yielded an immediate lift from 54% to 81% accuracy.',
          'Bi-encoders are fast because vectors are computed offline, but they lose fine-grained token-level cross-attention. Cross-encoders examine the query and candidate chunk jointly, identifying subtle contradictions and qualification boundaries that bi-encoders miss.'
        ]
      },
      {
        heading: 'Orchestrating Cycles with LangGraph',
        paragraphs: [
          'Linear RAG pipelines assume that every retrieval succeeds on the first try. In complex workflows, models need the agency to evaluate retrieval quality, rephrase queries, or declare information absent rather than hallucinate.',
          'By modeling retrieval as a cyclic state graph in LangGraph—with Document Grader, Query Rewriter, and Hallucination Checker nodes—the pipeline dynamically repairs poor queries before generation occurs.'
        ]
      }
    ],
    takeaways: [
      'Semantic structure matters more than raw embedding dimensionality.',
      'Always deploy a cross-encoder reranker before passing context to LLM generation.',
      'Graph-based cyclic agent workflows prevent hallucination cascades on out-of-distribution queries.'
    ]
  },
  {
    slug: 'multimodal-lie-detection',
    date: 'MAY 26',
    readTime: '5 min read',
    title: 'Multimodal Lie Detection: Fusing Speech Acoustic Features & DistilBERT',
    description: 'Lessons from designing late-fusion Random Forest ensembles for deception detection at DRDO.',
    tags: ['Machine Learning', 'PyTorch', 'NLP', 'Audio Processing'],
    sections: [
      {
        heading: 'The Challenge of Deception Analysis',
        paragraphs: [
          'Deception is rarely isolated to what someone says or how they sound alone. Linguistic cues (such as cognitive complexity, distancing pronouns, and hedge words) tell one half of the story, while acoustic prosody (pitch jitter, speech rhythm, formant shifts, and micro-pauses) tells the other.',
          'During research at DIPR (DRDO), we worked with a corpus of ~1,000 interview recordings to investigate how multimodal fusion could outperform single-modality baselines.'
        ]
      },
      {
        heading: 'Dual-Feature Extraction Pipeline',
        paragraphs: [
          'We decomposed raw audio recordings into two parallel streams:'
        ],
        bullets: [
          'Acoustic Stream: Extracted MFCCs, fundamental frequency (F0) contours, spectral centroid, jitter, and silence duration distributions across 5-second sliding windows using Librosa.',
          'Linguistic Stream: Transcribed speech using Faster-Whisper, cleaned disfluencies, and extracted contextual sentence embeddings with a fine-tuned DistilBERT checkpoint.'
        ]
      },
      {
        heading: 'Why Late Fusion Outperformed Early Fusion',
        paragraphs: [
          'Early fusion—concatenating dense audio vectors with BERT embeddings into a monolithic classifier—proved prone to overfitting and dominated by linguistic features due to the dimensionality disparity.',
          'Instead, we built a late-fusion ensemble: the linguistic and acoustic sub-models generated independent probability distributions, which were then calibrated and weighted by a Random Forest meta-classifier. The individual linguistic model achieved 74% accuracy and the acoustic model 68%, while the late-fusion ensemble reached 81% accuracy.'
        ]
      }
    ],
    takeaways: [
      'Unbalanced feature dimensions require late-stage decision fusion rather than raw feature concatenation.',
      'Micro-silences and pitch variability provide critical signals that text transcripts completely strip away.',
      'Ensemble calibration protects against modality-specific sensor noise.'
    ]
  },
  {
    slug: 'tokens-are-cheap-thinking-isnt',
    date: 'APR 26',
    readTime: '4 min read',
    title: "Tokens Are Cheap. Thinking Isn't",
    description: "Why latency, prompt distillation, and architectural guardrails matter more than raw LLM context size.",
    tags: ['LLMs', 'System Design', 'Architecture'],
    sections: [
      {
        heading: 'The Context Window Illusion',
        paragraphs: [
          'Every few months, context windows double. We moved from 4k tokens to 128k, 1M, and beyond. This has led many engineering teams into lazy architecture: dumping entire databases, API documentation, and conversation logs into a single prompt prompt and hoping the LLM figures it out.',
          'While LLM inference pricing per million tokens has dropped dramatically, "thinking"—reasoning latency, attention dilution, and the "needle in a haystack" loss of recall—remains expensive.'
        ]
      },
      {
        heading: 'Attention Saturation & Latency Taxes',
        paragraphs: [
          'As input context grows, First-Time-To-Token (TTFT) degrades quadratically without specialized hardware optimizations. More critically, LLM attention mechanisms display U-shaped accuracy curves: information buried in the middle 60% of a massive prompt is disproportionately overlooked.',
          'In production agentic systems, a 2-second delay per reasoning cycle compounded over a 6-step tool loop creates a frustrating 12-second roundtrip for end users.'
        ]
      },
      {
        heading: 'Architectural Hygiene for Agentic Systems',
        paragraphs: [
          'The solution is architectural discipline: context distillation, prompt caching, and strict schema validation.'
        ],
        bullets: [
          'Deterministic routing: Use deterministic code or lightweight classifiers to prune irrelevant tools before querying the model.',
          'State minimization: Store intermediate scratchpads in structured key-value stores rather than carrying raw history in prompt chains.',
          'Semantic schema pruning: Pass only the subset of API schemas relevant to the current conversation turn.'
        ]
      }
    ],
    takeaways: [
      'More context is not always better context; relevance density drives reasoning quality.',
      'Compound latency across multi-step agent loops is the primary bottleneck in user experience.',
      'Invest in deterministic preprocessing to protect expensive LLM attention.'
    ]
  },
  {
    slug: 'designing-reactive-microservices-fastapi-websockets',
    date: 'MAR 26',
    readTime: '5 min read',
    title: 'Designing Reactive Microservices with FastAPI & WebSockets',
    description: 'Patterns for real-time streaming LLM outputs, background Celery workers, and low-latency client sockets.',
    tags: ['FastAPI', 'WebSockets', 'Python', 'Redis'],
    sections: [
      {
        heading: 'The Shift from Request-Response to Event Streams',
        paragraphs: [
          'Modern generative applications cannot rely on standard HTTP request-response patterns. When an agent is coordinating multiple API calls, fetching data, and streaming text tokens, keeping users on a spinning loading indicator ruins the perception of speed.',
          'Building reactive services requires persistent duplex channels where status updates, tool execution traces, and token streams can arrive as independent, non-blocking events.'
        ]
      },
      {
        heading: 'FastAPI & Redis Pub/Sub Architecture',
        paragraphs: [
          'In high-throughput services, tying a long-running WebSocket directly to a blocking background worker thread exhausts server resources quickly. We decouple the socket layer using Redis Pub/Sub channels.'
        ],
        bullets: [
          'FastAPI WebSocket Gateway: Handles client authentication, heartbeats, and frame serialization.',
          'Redis Event Channel: Asynchronous Celery or asyncio worker tasks publish progress tokens and state transitions to channel rooms.',
          'Multiplexed Stream Protocol: Single WebSocket connection routes user input commands and multiplexes multiple background job status updates.'
        ]
      },
      {
        heading: 'Connection Resilience & Reconnection Backoff',
        paragraphs: [
          'Network blips are inevitable on mobile devices. Designing client reconnection protocols with exponential jitter and server-side state checkpoints ensures users never lose generated context during intermittent dropouts.'
        ]
      }
    ],
    takeaways: [
      'Decouple persistent client WebSockets from computational worker tasks using Redis pub/sub.',
      'Stream intermediate thinking traces to build user trust and mask background execution latency.',
      'Implement structured event payloads with client-side reconciliation for reconnects.'
    ]
  },
  {
    slug: 'notes-from-enterprise-itsm-incident-triage',
    date: 'JAN 26',
    readTime: '4 min read',
    title: 'Notes from Enterprise ITSM Incident Triage',
    description: 'How analyzing 200+ ServiceNow tickets helped identify failure patterns driving 55% of recurring downtime.',
    tags: ['SRE', 'ServiceNow', 'Enterprise Software', 'Incident Management'],
    sections: [
      {
        heading: 'The Reality of Enterprise Incidents',
        paragraphs: [
          'During my software internship at Accenture working on an international enterprise account, I conducted a root-cause retrospective across 200+ ServiceNow ITSM tickets. On the surface, tickets presented as isolated errors: database timeout, credential rejection, memory spike.',
          'When clustered systematically, however, over 55% of total ticket volume was driven by just four recurring systemic failure modes.'
        ]
      },
      {
        heading: 'The 4 Recurring Anti-Patterns',
        paragraphs: [
          'Categorizing unstructured incident notes into a codified taxonomy revealed clear operational gaps:'
        ],
        bullets: [
          'Configuration Drift: Production environments diverging from staging due to manual hotfixes applied during outages.',
          'Missing Graceful Degradation: Upstream microservice timeouts causing cascading connection pool exhaustion downstream.',
          'Unrotated Secrets & Token Expirations: Services failing abruptly due to hardcoded credential expiry mismatches.',
          'Unmonitored Queue Backlog: Background queues silently saturating until memory limits forced container restarts.'
        ]
      },
      {
        heading: 'Actionable Remediation & Triage Automation',
        paragraphs: [
          'Documenting these patterns into a standardized triage playbook and introducing automated pre-flight health assertions drastically reduced manual ticket triage cycles, proving that systemic visibility is always more impactful than firefighting.'
        ]
      }
    ],
    takeaways: [
      'Most production downtime is caused by recurring operational anti-patterns, not novel bugs.',
      'Structured incident categorization is the prerequisite for automation and preventative engineering.',
      'Defensive timeouts and circuit breakers are non-negotiable in distributed enterprise architectures.'
    ]
  },
  {
    slug: 'model-context-protocol-in-practice',
    date: 'DEC 25',
    readTime: '5 min read',
    title: 'The Model Context Protocol (MCP) in Practice',
    description: 'Structuring tool-calling schemas, rate limiting, and session safety when connecting LLMs to external systems.',
    tags: ['MCP', 'Tool Calling', 'Agentic AI', 'APIs'],
    sections: [
      {
        heading: 'Standardizing the Agent-to-Tool Interface',
        paragraphs: [
          'Before the Model Context Protocol (MCP), connecting LLMs to internal tools required writing bespoke JSON schemas, custom serialization logic, and ad-hoc error parsers for every provider.',
          'MCP establishes a unified standard for how LLM clients discover, inspect, and invoke tools, resources, and prompt templates across disparate systems.'
        ]
      },
      {
        heading: 'Implementing Production-Safe MCP Servers',
        paragraphs: [
          'Building reliable MCP servers requires strict adherence to validation boundaries:'
        ],
        bullets: [
          'Strict JSON Schema typing: Using Pydantic or Zod to enforce input constraints before execution touches any business logic.',
          'Deterministic idempotency: Ensuring tools that mutate state (e.g., database writes, notifications) can be safely retried without unintended side effects.',
          'Sandboxed execution: Isolating arbitrary shell or query execution within permission-scoped containers.'
        ]
      },
      {
        heading: 'The Future of Interoperable Agents',
        paragraphs: [
          'By standardizing tool interfaces, MCP transforms specialized software tools into universal capabilities that any compliant agent can invoke instantly, unlocking a truly modular agentic ecosystem.'
        ]
      }
    ],
    takeaways: [
      'MCP eliminates custom integration overhead through standardized tool schemas.',
      'Idempotency and validation schemas are critical when exposing write actions to autonomous agents.',
      'Modular tool servers allow seamless capability sharing across multiple AI agents.'
    ]
  }
];
