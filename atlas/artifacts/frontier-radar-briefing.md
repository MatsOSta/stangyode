# AI Frontier Radar and Adoption Intelligence / AIフロンティア・レーダーと導入インテリジェンス

Snapshot / スナップショット: 2026-10-08

A bounded evidence inventory for deciding what to watch, test, or defer. / 何を観測し、試し、保留するかを決めるための、範囲を限定した証拠インベントリ。

> Seed items remain seed-era judgments until re-verified. New Radar items must keep provenance, history, and evidence state visible. Sensors are not proof. / シード項目は再検証までシード判断のまま。新規レーダー項目は来歴、履歴、証拠状態を明示する。センサーは証明ではない。

## Radar health / レーダー健全性

As of / 基準時刻: 2026-10-08T19:26:39Z; cadence / 頻度: daily; data / データ: CURRENT; stale after / 期限: 48h

### Pipeline runs / パイプライン実行
- scout: SUCCESS; last success 2026-10-08T19:17:07Z; failure streak 0; last failure rate_limit at 2026-10-08T13:31:55Z (resolved)
- editor: SUCCESS; last success 2026-10-08T19:26:39Z; failure streak 0

### Sensors / センサー
- primary-docs: CHECKED
- independent-press: CHECKED
- github-public: SKIPPED — The checked-in GitHub sensor remains manual-input with liveFetch disabled; repository evidence came through the broader scout instead. / チェックイン済みGitHubセンサーはliveFetch無効の手動入力のままであり、リポジトリ証拠はより広いスカウト経由で収集した。
- preprint: CHECKED

### First-party sources checked / 確認済み一次情報
- [OpenAI Decisions API](https://developers.openai.com/api/docs/guides/decisions): relevant; checked 2026-10-08; source openai-decisions
- [Cloudflare Clef](https://huggingface.co/Cloudflare/clef): relevant; checked 2026-10-08; source cloudflare-clef
- [Liquid AI open d1 decision models](https://huggingface.co/blog/LiquidAI/open-d1): relevant; checked 2026-10-08; source liquid-open-d1
- [llama.cpp decision models](https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp): relevant; checked 2026-10-08; source llamacpp-decision-models
- [Typed Decision Models: An Early Evidence Audit and Evaluation Checklist](https://arxiv.org/html/2609.32160v1): relevant; checked 2026-10-08; source typed-decision-audit
- [Atomix: Timely, Transactional Tool Use for Reliable Agentic Workflows](https://arxiv.org/html/2602.14849): relevant; checked 2026-10-08; source atomix-paper
- [Agents' Overreliance on Unreliable Tools](https://arxiv.org/abs/2609.05587): relevant; checked 2026-10-08; source unreliable-tools-paper
- [The Compaction Cliff in Long-Running AI Agent Memory](https://arxiv.org/abs/2608.22752): relevant; checked 2026-10-08; source knowledge-triage-paper
- [Knowledge Triage reference implementation](https://github.com/searchsim-org/cikm26-knowledge-triage): relevant; checked 2026-10-08; source knowledge-triage-repo
- [Anthropic news](https://www.anthropic.com/news): relevant; checked 2026-10-08; source anthropic-news
- [Google Developers news](https://developers.googleblog.com/en/search): relevant; checked 2026-10-08; source google-developers-news
- [Microsoft Research Agent Lightning 1.0](https://www.microsoft.com/en-us/research/blog/agent-lightning-v1-0): relevant; checked 2026-10-08; source microsoft-agent-lightning
- [AWS machine-learning announcements](https://aws.amazon.com/blogs/machine-learning/category/post-types/announcements): relevant; checked 2026-10-08; source aws-ml-announcements
- [Cloudflare Agents](https://blog.cloudflare.com/tag/agents): relevant; checked 2026-10-08; source cloudflare-agents
- [Meta AI news](https://about.fb.com/news/tag/ai): no-material-change; checked 2026-10-08; source meta-ai-news
- [Mistral AI news](https://mistral.ai/news): relevant; checked 2026-10-08; source mistral-news
- [Hugging Face blog](https://huggingface.co/blog): relevant; checked 2026-10-08; source huggingface-blog
- [TypeSafe System One](https://docs.typesafe.ai/concepts/system-one): relevant; checked 2026-10-08; source typesafe-system-one
- [Vercel skills CLI](https://github.com/vercel-labs/skills): relevant; checked 2026-10-08; source vercel-skills-cli
- [MCP Python SDK releases](https://github.com/modelcontextprotocol/python-sdk/releases): no-material-change; checked 2026-10-08; source mcp-python-releases
- [MCP TypeScript SDK releases](https://github.com/modelcontextprotocol/typescript-sdk/releases): no-material-change; checked 2026-10-08; source mcp-typescript-releases

### Queries run / 実行クエリ
### Named entities and sibling implementations / 名前付きエンティティと同等実装
Found independently operated hosted and open implementations that establish a category while reducing Jev-specific differentiation. / 独立運営のホスト型・公開実装を確認し、カテゴリ成立と同時にJev固有の差別化低下を示した。

Targets: jev, typed-probabilistic-decision-models

Evidence: typesafe-system-one, openai-decisions, cloudflare-clef, liquid-open-d1, llamacpp-decision-models, typed-decision-audit

- `Jev TypeSafe AI System One`
- `Jev AI decision model alternatives competitors`
- `Jev typed answers predicate choice score`
- `Jev classification routing probabilities`
- `OpenAI Decisions API model`
- `typed probabilistic decision AI API`
- `bounded finite-answer decision model`
- `exact-name release adoption benchmark criticism for tracked entities`

### First-party release sweep / 一次情報リリース確認
Checked the declared first-party release surfaces; material changes were attributed to their named entities or categories, and no-change outcomes remained explicit. / 宣言済みの一次情報リリース面を確認し、重要な変化を名前付きエンティティまたはカテゴリへ帰属させ、変化なしの結果も明示した。

Targets: jev, agent-skills, mcp-apps, typed-probabilistic-decision-models

Evidence: openai-decisions, anthropic-news, google-developers-news, microsoft-agent-lightning, aws-ml-announcements, cloudflare-agents, meta-ai-news, mistral-news, huggingface-blog, typesafe-system-one, vercel-skills-cli, mcp-python-releases, mcp-typescript-releases

- `site-restricted seven-day checks across OpenAI, Anthropic, Google, Microsoft, AWS, Cloudflare, Meta, Mistral, and Hugging Face`
- `site-restricted checks for TypeSafe/Jev, Vercel Skills, MCP, Knowledge Triage, and Atomix`

### Open phenomenon discovery / 現象ベースのオープン探索
Found material evidence for tool-effect integrity and knowledge retention without treating broad agent attention as capability proof. / 広範なエージェント注目を能力証明とせず、ツール効果の完全性と知識保持に関する重要な証拠を確認した。

Targets: tool-effect-integrity, knowledge-triage, context-engineering

Evidence: atomix-paper, unreliable-tools-paper, knowledge-triage-paper, knowledge-triage-repo

- `AI agent reliability benchmark tool-use integrity`
- `LLM agent context retention memory benchmark`
- `AI agent orchestration inference serving scheduling`
- `tool-use security supply-chain prompt injection`
- `human-agent interface evaluation benchmark`
- `non-atomic tool failure verify-before-retry benchmark`

### Tracked named entities / 追跡中の名前付きエンティティ
- jev, agent-skills, mcp-apps, ponytail, caveman

### Changelog entries checked / 確認済み変更履歴
- radar-loop-1, radar-loop-2, radar-loop-3, radar-health-1

### Explicitly stale sources / 明示的に古い情報源
- a2a-spec; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。
- ard-spec; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。
- anthropic-context; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。

### Findings and decisions / 発見と判断
- material-finding; typed-probabilistic-decision-models: Multiple hosted and open implementations now establish typed probabilistic decisions as a category, while general accuracy superiority remains unproven. / 複数のホスト型・公開実装により型付き確率的判断はカテゴリとして成立したが、一般的な精度優位は未証明である。; evidence: typesafe-system-one, openai-decisions, cloudflare-clef, liquid-open-d1, llamacpp-decision-models, typed-decision-audit
- editorial-decision; jev, typed-probabilistic-decision-models: Keep Jev as a commoditizing named WATCH entity and track typed probabilistic decision models as the broader WATCH category. / Jevはコモディティ化する名前付きWATCH項目として残し、型付き確率的判断モデルをより広いWATCHカテゴリとして追跡する。; evidence: typesafe-system-one, openai-decisions, cloudflare-clef, liquid-open-d1, llamacpp-decision-models, typed-decision-audit
- material-finding; tool-effect-integrity: Outcome verification, idempotency, and verify-before-retry address observed external-tool failure modes now. / 結果検証、冪等性、再試行前検証は、観測済みの外部ツール障害モードへ今すぐ対応できる。; evidence: atomix-paper, unreliable-tools-paper

## Signals / シグナル

### Agent Skills / Agent Skills
- Adoption stage / 導入段階: WATCH (55/100)
- Scores / スコア: frontier 82, fit 78, confidence 70
- Recommendation / 推奨: Watch and prototype with pinned sources, permission disclosure, review, and cross-host conformance checks; installability is not trust. / 固定済みソース、権限開示、レビュー、ホスト横断適合性確認を伴って観測・試作する。インストール可能であることは信頼ではない。
- Compatibility / 互換性: UNKNOWN — Host, permission, and instruction-loading compatibility remains untested across named clients. / 指定したクライアント間でのホスト、権限、指示読み込みの互換性は未検証。
- Trade-offs / トレードオフ:
  - Portable instructions can improve reuse, but hidden dependencies can weaken reviewability. / 移植可能な指示は再利用性を高めるが、隠れた依存関係はレビュー可能性を下げる。
  - Progressive disclosure reduces context load, but adds packaging and lifecycle work. / 段階的開示はコンテキスト負荷を減らすが、パッケージ化とライフサイクル作業が増える。
- Provenance / 来歴: verification; partially-verified; 2026-10-08
- History / 履歴:
  - 2026-09-24: Seeded for watch-list review. / ウォッチリスト確認用にシード。
  - 2026-10-08: Added implementation evidence for cross-client installation and update semantics; high attention supports WATCH, while provenance and permission controls remain weak. / クライアント横断のインストールと更新機能の実装証拠を追加。高い注目はWATCHを支持するが、来歴と権限制御は弱いまま。

### MCP Apps / MCP Apps
- Adoption stage / 導入段階: WATCH (50/100)
- Scores / スコア: frontier 80, fit 65, confidence 70
- Recommendation / 推奨: Watch as a typed tool-to-UI stack; require a narrow cross-host compatibility test and threat model before any pilot. / 型付きツールからUIへのスタックとして観測する。試行前に限定的なホスト横断互換性テストと脅威モデルを必須とする。
- Compatibility / 互換性: UNKNOWN — The Atlas records the protocol concept, not compatibility with Stangyode's static site or a chosen host. / アトラスが記録するのはプロトコル概念であり、Stangyodeの静的サイトや特定ホストとの互換性ではない。
- Trade-offs / トレードオフ:
  - Tool results can become more usable, but the host becomes part of the product contract. / ツール結果は使いやすくなるが、ホストが製品契約の一部になる。
  - Richer interaction can reduce handoff friction, but increases UI and security surface. / 豊かな操作は引き継ぎ摩擦を減らすが、UIとセキュリティ面を広げる。
- Provenance / 来歴: verification; partially-verified; 2026-10-08
- History / 履歴:
  - 2026-09-24: Seeded as a protocol watch item. / プロトコルの観測項目としてシード。
  - 2026-10-08: Added an active full-stack framework and the July protocol changelog; typed UI contracts are real, but production compatibility remains unverified. / 活発なフルスタック・フレームワークと7月のプロトコル変更履歴を追加。型付きUI契約は実在するが、本番互換性は未検証。

### A2A / A2A
- Adoption stage / 導入段階: WATCH (46/100)
- Scores / スコア: frontier 73, fit 57, confidence 55
- Recommendation / 推奨: Keep on the watch list; first establish a real multi-agent boundary before evaluating a protocol. / ウォッチリストに置く。プロトコル評価の前に、実際のマルチエージェント境界を確立する。
- Compatibility / 互換性: UNKNOWN — No independent agent endpoint or Agent Card exists in this project snapshot to test against. / このプロジェクトのスナップショットには、検証対象となる独立エンドポイントやAgent Cardがない。
- Trade-offs / トレードオフ:
  - Independent agent deployment can clarify ownership, but adds discovery and task-state contracts. / 独立エージェントのデプロイは責務を明確にするが、発見とタスク状態の契約が増える。
  - Async artifacts support long work, but make observability and failure recovery more demanding. / 非同期アーティファクトは長い作業を支えるが、可観測性と障害復旧が難しくなる。
- Provenance / 来歴: seed; unverified; 2026-09-24
- History / 履歴:
  - 2026-09-24: Seeded as a future boundary candidate. / 将来の境界候補としてシード。

### Agentic Resource Discovery (ARD) / Agentic Resource Discovery (ARD)
- Adoption stage / 導入段階: DEFER (31/100)
- Scores / スコア: frontier 84, fit 61, confidence 46
- Recommendation / 推奨: Watch as a discovery and verification layer; do not treat it as an execution interface or settled standard. / 発見・検証層として観測する。実行インターフェースや確定した標準として扱わない。
- Compatibility / 互換性: UNKNOWN — The evolving specification has not been evaluated against a live discovery service in this project. / 発展中の仕様を、このプロジェクトでライブの発見サービスに対して評価していない。
- Trade-offs / トレードオフ:
  - Pre-invocation verification can improve trust, but federation adds policy and freshness questions. / 呼び出し前の検証は信頼性を高めるが、連合化はポリシーと鮮度の問題を増やす。
  - A separate discovery layer can reduce coupling, but creates another contract to operate. / 独立した発見層は結合を減らすが、運用すべき契約をもう一つ増やす。
- Provenance / 来歴: seed; unverified; 2026-09-24
- History / 履歴:
  - 2026-09-24: Seeded as an evolving architecture watch item. / 発展中のアーキテクチャ観測項目としてシード。

### Context Engineering / コンテキスト・エンジニアリング
- Adoption stage / 導入段階: PILOT (62/100)
- Scores / スコア: frontier 66, fit 82, confidence 64
- Recommendation / 推奨: Adopt the principle in documentation and evaluation before adding a new runtime dependency. / 新しいランタイム依存を増やす前に、原則を文書化と評価へ導入する。
- Compatibility / 互換性: UNKNOWN — The concept is compatible in principle, but project-specific gains have not been measured. / 原則上は適用可能だが、プロジェクト固有の効果は測定していない。
- Trade-offs / トレードオフ:
  - Deliberate context selection can improve reliability, but requires measurement and maintenance. / 意図的なコンテキスト選択は信頼性を高めるが、測定と保守が必要になる。
  - Compaction and disclosure control token cost, but can hide information needed for diagnosis. / 圧縮と開示制御はトークンコストを抑えるが、診断に必要な情報を隠すことがある。
- Provenance / 来歴: seed; unverified; 2026-09-24
- History / 履歴:
  - 2026-09-24: Seeded as the highest-fit practice candidate. / 適合度の高い実践候補としてシード。

### Ponytail / Ponytail
- Adoption stage / 導入段階: DEFER (0/100)
- Scores / スコア: frontier 50, fit 50, confidence 0
- Recommendation / 推奨: Keep as an unverified discovery candidate; collect a repository, license, and runnable description before evaluation. / 未検証の発見候補として保持する。評価前にリポジトリ、ライセンス、実行可能な説明を収集する。
- Compatibility / 互換性: UNKNOWN — No canonical artifact or compatibility evidence was supplied for this seed. / このシードには正規アーティファクトも互換性の証拠も提供されていない。
- Trade-offs / トレードオフ:
  - A named candidate preserves a lead for later research, but the name alone is not evidence. / 名前付き候補は後続調査の手掛かりを残すが、名前だけでは証拠にならない。
  - Deferring adoption avoids accidental installation, but leaves capability value unknown. / 導入を保留すれば誤インストールを避けられるが、能力の価値は不明なままになる。
- Provenance / 来歴: seed; unknown; 2026-09-24
- History / 履歴:
  - 2026-09-24: Added as an unverified candidate; no evidence collected. / 未検証候補として追加。証拠は収集していない。

### Caveman / Caveman
- Adoption stage / 導入段階: DEFER (0/100)
- Scores / スコア: frontier 50, fit 50, confidence 0
- Recommendation / 推奨: Keep as an unverified discovery candidate; do not infer capability, safety, or compatibility from the name. / 未検証の発見候補として保持する。名前から能力、安全性、互換性を推測しない。
- Compatibility / 互換性: UNKNOWN — No canonical artifact or compatibility evidence was supplied for this seed. / このシードには正規アーティファクトも互換性の証拠も提供されていない。
- Trade-offs / トレードオフ:
  - A placeholder keeps the research queue explicit, but can create false priority if not labelled unknown. / プレースホルダーは調査待ちを明示するが、不明と表示しなければ優先度を誤認させる。
  - Waiting for primary evidence protects the project boundary, but delays any adoption decision. / 一次証拠を待つことはプロジェクト境界を守るが、導入判断を遅らせる。
- Provenance / 来歴: seed; unknown; 2026-09-24
- History / 履歴:
  - 2026-09-24: Added as an unverified candidate; no evidence collected. / 未検証候補として追加。証拠は収集していない。

### Jev / Jev
- Adoption stage / 導入段階: WATCH (26/100)
- Scores / スコア: frontier 76, fit 54, confidence 70
- Recommendation / 推奨: Watch Jev as a commoditizing named implementation and benchmark candidate, not as the category default; compare it with hosted and open alternatives before adoption. / Jevをコモディティ化しつつある名前付き実装兼ベンチマーク候補として観測し、カテゴリの標準とは見なさない。導入前にホスト型と公開型の代替実装と比較する。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload has been run against Jev, and vendor quality or calibration claims have not been independently reproduced here. / Stangyodeの仕事をJevで実行しておらず、ベンダーの品質・較正主張もここでは独立再現していない。
- Trade-offs / トレードオフ:
  - Jev offers typed, parse-free answers and vendor-reported low latency and cost, but it remains early-access and text-only. / Jevは解析不要の型付き回答とベンダー報告の低遅延・低コストを提供するが、早期アクセスかつテキスト専用である。
  - OpenAI Decisions, Clef, d1, and llama.cpp-compatible models now supply substantially the same value, sharply reducing Jev-specific differentiation. / OpenAI Decisions、Clef、d1、llama.cpp互換モデルが実質的に同じ価値を提供し、Jev固有の差別化は大きく低下した。
- Provenance / 来歴: verification; partially-verified; 2026-10-08
- History / 履歴:
  - 2026-10-08: Initially discovered inside a combined System One / typed-decisions record. / 当初はシステムワン / 型付き判断の統合レコード内で発見された。
  - 2026-10-08: Split into a named-entity record after multiple equivalents emerged. Jev remains WATCH, but its implementation-specific fit and differentiation were lowered. / 複数の同等実装が登場したため名前付きエンティティへ分離。JevはWATCHを維持するが、実装固有の適合度と差別化を引き下げた。

### Typed probabilistic decision models / 型付き確率的判断モデル
- Adoption stage / 導入段階: WATCH (48/100)
- Scores / スコア: frontier 91, fit 80, confidence 82
- Recommendation / 推奨: WATCH for cheap classification, routing, verification, abstention, and escalation; benchmark local workloads against calibrated classifiers and label-probability baselines before choosing an implementation. / 低コストの分類、ルーティング、検証、棄却、エスカレーション用途としてWATCHする。実装選定前に、実際の仕事を較正済み分類器とラベル確率ベースラインに対して評価する。
- Compatibility / 互換性: UNKNOWN — Adoption paths exist for hosted, open-weight, local, text, and multimodal use, but no implementation has been benchmarked on a Stangyode workload. / ホスト型、公開ウェイト、ローカル、テキスト、マルチモーダルの導入経路はあるが、Stangyodeの仕事で評価した実装はない。
- Trade-offs / トレードオフ:
  - Bounded predicate, choice, and score outputs avoid free-text parsing and expose probabilities in one pass, but task-specific calibration still has to be measured. / 限定されたpredicate、choice、score出力は自由文解析を避け、一回の推論で確率を示すが、仕事固有の較正は測定が必要である。
  - Implementations now include Jev, OpenAI Decisions, Clef, Liquid d1, and six llama.cpp-served model families; provider quality, modality, license, deployment, and price remain unsettled. / 実装にはJev、OpenAI Decisions、Clef、Liquid d1、llama.cppで配信できる6系統があるが、品質、モダリティ、ライセンス、配備、価格の優位は未確定である。
- Provenance / 来歴: verification; partially-verified; 2026-10-08
- History / 履歴:
  - 2026-10-08: Discovered without a Jev-named query. Initially tracked as a combined System One / typed-decisions signal with Jev as its known implementation. / Jevという名前のクエリなしで発見。当初はJevを既知の実装とする、システムワン / 型付き判断の統合シグナルとして追跡した。
  - 2026-10-08: Added an open implementation and an independent early evidence audit. The interface and latency/cost case strengthened; general accuracy superiority remained unproven. / 公開実装と独立した初期証拠監査を追加。インターフェースと遅延・コスト面は強まったが、一般的な精度優位は未証明のままだった。
  - 2026-10-08: Spawned as a category when OpenAI Decisions, open multimodal models, and a six-model llama.cpp stack established credible cross-vendor convergence around typed probabilistic decisions. / OpenAI Decisions、公開マルチモーダルモデル、6モデルのllama.cppスタックにより、型付き確率的判断への信頼できるベンダー横断収束が成立したためカテゴリとして分離。

### Knowledge Triage / type-aware retention / Knowledge Triage / 型対応保持
- Adoption stage / 導入段階: WATCH (28/100)
- Scores / スコア: frontier 79, fit 84, confidence 68
- Recommendation / 推奨: Watch and replicate on real agent histories before adopting type-aware compaction; preserve exact invariants separately in the meantime. / 型対応圧縮を採用する前に実際のエージェント履歴で再現する。当面は正確な不変条件を別途保持する。
- Compatibility / 互換性: UNKNOWN — No representative long-running agent history from this project has been evaluated with these operators. / このプロジェクトの代表的な長期エージェント履歴を、これらの演算子で評価していない。
- Trade-offs / トレードオフ:
  - Type-specific retention can protect exact constraints, but classification errors become a new safety boundary. / 型別保持は正確な制約を守れるが、分類誤りが新たな安全境界になる。
  - The paper and code provide replication artifacts, but the reported gains still come from one research line without independent replication. / 論文とコードは再現用成果物を提供するが、報告された改善は独立再現のない一つの研究系列に依存する。
- Provenance / 来歴: discovery; partially-verified; 2026-10-08
- History / 履歴:
  - 2026-10-08: Added at WATCH from a peer-reviewed paper and reference implementation; strong relevance, low buzz, replication still required. / 査読論文と参照実装からWATCHに追加。関連性は高く話題性は低い。再現はなお必要。

### Verified tool effects and transactional settlement / 検証済みツール効果とトランザクション決済
- Adoption stage / 導入段階: WATCH (30/100)
- Scores / スコア: frontier 83, fit 90, confidence 74
- Recommendation / 推奨: Watch as a reliability pattern: verify tool returns, make writes idempotent or compensable, and gate irreversible effects behind explicit settlement. / 信頼性パターンとして観測する。ツール戻り値を検証し、書き込みを冪等または補償可能にし、不可逆効果を明示的な決済の後段に置く。
- Compatibility / 互換性: UNKNOWN — The pattern fits external-write workflows in principle, but no Stangyode-side harness or transactional adapter has been tested. / 原則上は外部書き込みワークフローに適合するが、Stangyode側のハーネスやトランザクション・アダプターは未検証。
- Trade-offs / トレードオフ:
  - Verification and settlement boundaries reduce silent corruption and leaked side effects, but add latency, adapters, and failure states. / 検証と決済境界は静かな破損と漏れた副作用を減らすが、遅延、アダプター、障害状態を増やす。
  - Atomix demonstrates one concrete runtime design, but does not establish full crash-safe exactly-once behavior or automatic fit for existing systems. / Atomixは具体的なランタイム設計を示すが、完全なクラッシュ安全exactly-onceや既存システムへの自動適合を確立しない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-08
- History / 履歴:
  - 2026-10-08: Added at WATCH as an Atlas-level reliability pattern, not an automatic recommendation to adopt Atomix. / Atomixの自動採用推奨ではなく、アトラス級の信頼性パターンとしてWATCHに追加。

## GitHub discovery input / GitHub発見入力

Public observation input only. Living candidates live in discovery-candidates.json. Absence of a repository is not a negative finding. Queries may be phenomenon-based and need not match Core Atlas terms. / 公開観測の入力のみ。生きた候補は discovery-candidates.json にある。リポジトリがないことは否定的発見ではない。クエリは現象ベースでよく、コア・アトラス用語と一致する必要はない。

Provider / プロバイダー: github; mode / モード: manual-input; live fetch / ライブ取得: no

- typed-decision-models: typed probabilistic decision model System One (collected)
- agent-skills: topic:agent-skills (not-collected)
- mcp-apps: topic:mcp-apps (not-collected)
- a2a: topic:agent-to-agent (not-collected)
- agentic-resource-discovery-ard: topic:agentic-resource-discovery (not-collected)
- ponytail: ponytail (not-collected)
- caveman: caveman (not-collected)

Collected signals / 収集済みシグナル: 0

Generated by atlas/scripts/render-frontier-briefing.mjs; deterministic for the checked-in inputs.
