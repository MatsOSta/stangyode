# AI Frontier Radar and Adoption Intelligence / AIフロンティア・レーダーと導入インテリジェンス

Snapshot / スナップショット: 2026-10-09

A bounded evidence inventory for deciding what to watch, test, or defer. / 何を観測し、試し、保留するかを決めるための、範囲を限定した証拠インベントリ。

> Seed items remain seed-era judgments until re-verified. New Radar items must keep provenance, history, and evidence state visible. Sensors are not proof. / シード項目は再検証までシード判断のまま。新規レーダー項目は来歴、履歴、証拠状態を明示する。センサーは証明ではない。

## Radar health / レーダー健全性

As of / 基準時刻: 2026-10-09T06:11:32Z; cadence / 頻度: daily; data / データ: CURRENT; stale after / 期限: 48h

### Pipeline runs / パイプライン実行
- scout: SUCCESS; last success 2026-10-09T05:07:41Z; failure streak 0; last failure rate_limit at 2026-10-08T13:31:55Z (resolved)
- editor: SUCCESS; last success 2026-10-09T06:11:32Z; failure streak 0

### Sensors / センサー
- primary-docs: CHECKED
- independent-press: CHECKED
- github-public: SKIPPED — The checked-in GitHub sensor remains manual-input with liveFetch disabled; repository evidence came through the broader scout instead. / チェックイン済みGitHubセンサーはliveFetch無効の手動入力のままであり、リポジトリ証拠はより広いスカウト経由で収集した。
- preprint: CHECKED

### First-party sources checked / 確認済み一次情報
- [TypeSafe current models](https://docs.typesafe.ai/models): no-material-change; checked 2026-10-09; source typesafe-models
- [Perplexity Decisions API](https://docs.perplexity.ai/docs/decisions/quickstart): relevant; checked 2026-10-09; source perplexity-decisions
- [Jebadiah open decision models](https://github.com/getainode/jebadiah): relevant; checked 2026-10-09; source jebadiah-repo
- [Quyet 1.0.2](https://pypi.org/project/quyet/): relevant; checked 2026-10-09; source quyet-pypi
- [Vercel AI Gateway Decisions API](https://vercel.com/docs/ai-gateway/sdks-and-apis/openai-decisions): relevant; checked 2026-10-09; source vercel-decisions-gateway
- [mcp-use 2.8.1 release](https://github.com/mcp-use/mcp-use/releases/tag/mcp-use%402.8.1): relevant; checked 2026-10-09; source mcp-use-2-8-1
- [Ponytail 5.1.0 release](https://github.com/DietrichGebert/ponytail/releases/tag/v5.1.0): relevant; checked 2026-10-09; source ponytail-5-1-0
- [Caveman 3.2.0 release](https://github.com/JuliusBrussee/caveman/releases/tag/v3.2.0): relevant; checked 2026-10-09; source caveman-3-2-0
- [Google Cloud Gemini agent announcement](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026): relevant; checked 2026-10-09; source google-gemini-agent
- [OpenAI API changelog](https://developers.openai.com/api/docs/changelog): relevant; checked 2026-10-09; source openai-changelog
- [Anthropic API release notes](https://docs.anthropic.com/en/release-notes/api): relevant; checked 2026-10-09; source anthropic-api-release-notes
- [Google AQuA announcement](https://developers.googleblog.com/the-outer-loop-insights-first-an-ambient-quality-agent-that-diagnoses-your-production-agent): relevant; checked 2026-10-09; source google-aqua
- [AWS Nova 2.5 Sonic announcement](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-nova-2.5-Sonic): relevant; checked 2026-10-09; source aws-nova-sonic
- [Microsoft Azure announcements](https://azure.microsoft.com/en-us/blog/content-type/announcements/): no-material-change; checked 2026-10-09; source azure-announcements
- [Meta AI news](https://about.fb.com/news/tag/ai): no-material-change; checked 2026-10-09; source meta-ai-news
- [Mistral AI news](https://mistral.ai/news): no-material-change; checked 2026-10-09; source mistral-news
- [Hugging Face blog](https://huggingface.co/blog): no-material-change; checked 2026-10-09; source huggingface-blog
- [Cloudflare Agents](https://blog.cloudflare.com/tag/agents): no-material-change; checked 2026-10-09; source cloudflare-agents
- [MCP Python SDK releases](https://github.com/modelcontextprotocol/python-sdk/releases): no-material-change; checked 2026-10-09; source mcp-python-releases
- [MCP TypeScript SDK releases](https://github.com/modelcontextprotocol/typescript-sdk/releases): no-material-change; checked 2026-10-09; source mcp-typescript-releases
- [Knowledge Triage reference implementation](https://github.com/searchsim-org/cikm26-knowledge-triage): no-material-change; checked 2026-10-09; source knowledge-triage-repo
- [Atomix releases](https://github.com/mpi-dsg/atomix/releases): no-material-change; checked 2026-10-09; source atomix-releases

### Queries run / 実行クエリ
### Named entities and sibling implementations / 名前付きエンティティと同等実装
Additional independent decision implementations further commoditized Jev while strengthening the category; named framework and minimization releases were kept separate from their broader concepts. / 追加の独立判断実装はJevをさらにコモディティ化しつつカテゴリを強化した。名前付きフレームワークと最小化リリースは広い概念と分離して保持した。

Targets: jev, typed-probabilistic-decision-models, mcp-use, ponytail, caveman

Evidence: typesafe-models, perplexity-decisions, jebadiah-repo, quyet-pypi, vercel-decisions-gateway, mcp-use-2-8-1, ponytail-5-1-0, caveman-3-2-0

- `exact-name release, alternatives, competitors, adoption, benchmark, and criticism searches for tracked named entities`
- `Jev alternatives competitors`
- `decision API/model`
- `typed answers`
- `predicate choice score`
- `classification routing probabilities`
- `bounded finite-answer decisions`
- `major-vendor decision model equivalent`

### First-party release sweep / 一次情報リリース確認
The rolling release sweep found a material Gemini agent launch and named project releases; explicit no-change checks remained visible. / ローリングリリース確認で重要なGemini agent発表と名前付きプロジェクトのリリースを確認し、変化なしの確認も明示した。

Targets: jev, mcp-use, gemini-agent, agent-skills, mcp-apps

Evidence: typesafe-models, mcp-use-2-8-1, google-gemini-agent, openai-changelog, anthropic-api-release-notes, google-aqua, aws-nova-sonic, azure-announcements, meta-ai-news, mistral-news, huggingface-blog, cloudflare-agents, mcp-python-releases, mcp-typescript-releases, knowledge-triage-repo, atomix-releases

- `site-restricted October 3–9 checks across OpenAI, Anthropic, Google, Microsoft, AWS, Cloudflare, Meta, Mistral, and Hugging Face`
- `site-restricted checks for TypeSafe/Jev, Vercel Skills, MCP, mcp-use, Knowledge Triage, and Atomix`

### Open phenomenon discovery / 現象ベースのオープン探索
Open discovery surfaced persistent work-agent identity and runtime-evidence leads; only the high-attention Gemini launch entered the public Radar. / オープン探索で永続業務エージェントIDと実行時証拠の手掛かりを確認し、高注目のGemini発表のみを公開レーダーへ追加した。

Targets: gemini-agent, tool-effect-integrity, knowledge-triage

Evidence: google-gemini-agent, google-aqua, aws-nova-sonic

- `agent reliability runtime verification`
- `long context memory benchmark`
- `agent inference orchestration`
- `tool security supply chain`
- `human-agent interface benchmark`
- `shadow agent endpoint discovery`
- `authorization decision receipt`
- `interactive executable artifact evaluation`

### Tracked named entities / 追跡中の名前付きエンティティ
- jev, agent-skills, mcp-apps, mcp-use, ponytail, caveman, gemini-agent

### Changelog entries checked / 確認済み変更履歴
- radar-loop-1, radar-loop-2, radar-loop-3, radar-health-1, radar-daily-2026-10-09

### Explicitly stale sources / 明示的に古い情報源
- a2a-spec; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。
- ard-spec; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。
- anthropic-context; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。

### Findings and decisions / 発見と判断
- material-finding; typed-probabilistic-decision-models: Three additional independent model families and a provider-neutral gateway strengthen typed probabilistic decisions as a category without establishing a winning implementation. / 追加の独立モデル3系統とプロバイダー中立ゲートウェイが型付き確率的判断カテゴリを強化したが、勝者となる実装は未確定。; evidence: perplexity-decisions, jebadiah-repo, quyet-pypi, vercel-decisions-gateway
- editorial-decision; jev, typed-probabilistic-decision-models: Lower Jev-specific frontier and fit scores while raising category readiness; keep both at WATCH and do not attribute competitor capability to Jev. / Jev固有のフロンティア性と適合度を下げ、カテゴリの準備度を上げる。両方をWATCHに保ち、競合能力をJevへ帰属させない。; evidence: typesafe-models, perplexity-decisions, jebadiah-repo, quyet-pypi
- material-finding; mcp-use, ponytail, caveman: Named releases justify WATCH records and bounded evaluation, but not PILOT or broad adoption without cross-host or task-success evidence. / 名前付きリリースはWATCH記録と限定評価を正当化するが、ホスト横断・タスク成功証拠なしにPILOTや広範導入は正当化しない。; evidence: mcp-use-2-8-1, ponytail-5-1-0, caveman-3-2-0
- editorial-decision; gemini-agent: Track Gemini agent as a high-attention named WATCH entity; vendor adoption claims do not establish independent reliability. / Gemini agentを高注目の名前付きWATCH項目として追跡し、ベンダー導入主張を独立した信頼性証明とは扱わない。; evidence: google-gemini-agent

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
- Adoption stage / 導入段階: WATCH (28/100)
- Scores / スコア: frontier 72, fit 66, confidence 66
- Recommendation / 推奨: WATCH as a named code-minimization skill; test on one real task and reject line-count or token savings that reduce task success. / 名前付きコード最小化スキルとしてWATCHする。実作業一件で検証し、タスク成功率を下げる行数・トークン削減は棄却する。
- Compatibility / 互換性: UNKNOWN — No canonical artifact or compatibility evidence was supplied for this seed. / このシードには正規アーティファクトも互換性の証拠も提供されていない。
- Trade-offs / トレードオフ:
  - Shorter instructions and code can reduce review surface, but minimal output can omit necessary behavior. / 短い指示とコードはレビュー面を減らせるが、最小出力は必要な振る舞いを欠く可能性がある。
  - The shortcut ledger preserves intentional debt, but effectiveness evidence remains project-authored. / shortcut台帳は意図的負債を残すが、有効性の証拠はプロジェクト自身の報告に留まる。
- Provenance / 来歴: verification; partially-verified; 2026-10-09
- History / 履歴:
  - 2026-09-24: Added as an unverified candidate; no evidence collected. / 未検証候補として追加。証拠は収集していない。
  - 2026-10-09: Verified the 5.1.0 release and neutral shortcut ledger; project-authored outcome claims justify learning, not adoption. / 5.1.0リリースと中立なshortcut台帳を確認。プロジェクト自身の成果主張は学習には値するが導入根拠にはならない。

### Caveman / Caveman
- Adoption stage / 導入段階: WATCH (34/100)
- Scores / スコア: frontier 78, fit 74, confidence 72
- Recommendation / 推奨: WATCH as a named reversible context-compression tool; require byte-exact recovery and end-to-end task-success gates in a bounded evaluation. / 名前付き可逆コンテキスト圧縮ツールとしてWATCHする。限定評価でバイト完全復元とエンドツーエンドのタスク成功ゲートを必須とする。
- Compatibility / 互換性: UNKNOWN — No canonical artifact or compatibility evidence was supplied for this seed. / このシードには正規アーティファクトも互換性の証拠も提供されていない。
- Trade-offs / トレードオフ:
  - Recoverable handles can move bulky tool results out of context while retaining exact retrieval, but add storage and integrity boundaries. / 復元可能ハンドルは大きなツール結果をコンテキスト外へ移しつつ正確な再取得を可能にするが、保存と完全性の境界が増える。
  - Deterministic fidelity checks are stronger than token counts, but do not prove end-to-end task success across agents. / 決定論的忠実度検査はトークン数より強いが、エージェント横断のタスク成功を証明しない。
- Provenance / 来歴: verification; partially-verified; 2026-10-09
- History / 履歴:
  - 2026-09-24: Added as an unverified candidate; no evidence collected. / 未検証候補として追加。証拠は収集していない。
  - 2026-10-09: Version 3.2.0 added recoverable handles, signed artifacts, integrations, and deterministic fidelity checks; general outcome gains remain unverified. / 3.2.0は復元可能ハンドル、署名済み成果物、統合、決定論的忠実度検査を追加したが、一般的な成果改善は未検証。

### Jev / Jev
- Adoption stage / 導入段階: WATCH (24/100)
- Scores / スコア: frontier 72, fit 50, confidence 70
- Recommendation / 推奨: Watch Jev as a commoditizing comparison target, not the category default; benchmark it against Perplexity, Quyet, Jebadiah, and calibrated baselines before adoption. / Jevをカテゴリ標準ではなく、コモディティ化する比較対象として観測する。導入前にPerplexity、Quyet、Jebadiah、較正済みベースラインと比較する。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload has been run against Jev, and vendor quality or calibration claims have not been independently reproduced here. / Stangyodeの仕事をJevで実行しておらず、ベンダーの品質・較正主張もここでは独立再現していない。
- Trade-offs / トレードオフ:
  - Jev offers typed, parse-free answers and vendor-reported low latency and cost, but it remains early-access and text-only. / Jevは解析不要の型付き回答とベンダー報告の低遅延・低コストを提供するが、早期アクセスかつテキスト専用である。
  - Perplexity Decisions, Quyet, Jebadiah, OpenAI Decisions, Clef, d1, and local stacks now supply the same core interface, further reducing Jev-specific differentiation. / Perplexity Decisions、Quyet、Jebadiah、OpenAI Decisions、Clef、d1、ローカルスタックが同じ中核インターフェースを提供し、Jev固有の差別化はさらに低下した。
- Provenance / 来歴: verification; partially-verified; 2026-10-09
- History / 履歴:
  - 2026-10-08: Initially discovered inside a combined System One / typed-decisions record. / 当初はシステムワン / 型付き判断の統合レコード内で発見された。
  - 2026-10-08: Split into a named-entity record after multiple equivalents emerged. Jev remains WATCH, but its implementation-specific fit and differentiation were lowered. / 複数の同等実装が登場したため名前付きエンティティへ分離。JevはWATCHを維持するが、実装固有の適合度と差別化を引き下げた。
  - 2026-10-09: Perplexity Decisions, Quyet, and Jebadiah added more direct substitutes without a verified Jev capability release; Jev-specific frontier and fit scores fell again. / Jevの能力リリースは確認されない一方、Perplexity Decisions、Quyet、Jebadiahという直接代替が増え、Jev固有のフロンティア性と適合度を再度引き下げた。

### Typed probabilistic decision models / 型付き確率的判断モデル
- Adoption stage / 導入段階: WATCH (52/100)
- Scores / スコア: frontier 93, fit 82, confidence 88
- Recommendation / 推奨: WATCH for cheap classification, routing, verification, abstention, and escalation; benchmark local workloads against calibrated classifiers and label-probability baselines before choosing an implementation. / 低コストの分類、ルーティング、検証、棄却、エスカレーション用途としてWATCHする。実装選定前に、実際の仕事を較正済み分類器とラベル確率ベースラインに対して評価する。
- Compatibility / 互換性: UNKNOWN — Adoption paths exist for hosted, open-weight, local, text, and multimodal use, but no implementation has been benchmarked on a Stangyode workload. / ホスト型、公開ウェイト、ローカル、テキスト、マルチモーダルの導入経路はあるが、Stangyodeの仕事で評価した実装はない。
- Trade-offs / トレードオフ:
  - Bounded predicate, choice, and score outputs avoid free-text parsing and expose probabilities in one pass, but task-specific calibration still has to be measured. / 限定されたpredicate、choice、score出力は自由文解析を避け、一回の推論で確率を示すが、仕事固有の較正は測定が必要である。
  - Hosted, open-weight, CPU/GPU, local, multimodal, and provider-neutral gateway paths now exist; calibration, robustness, deployment, and price—not interface novelty—decide between them. / ホスト型、公開ウェイト、CPU/GPU、ローカル、マルチモーダル、プロバイダー中立ゲートウェイの経路が揃った。実装選定はインターフェースの新規性ではなく、較正、堅牢性、配備、価格で決まる。
- Provenance / 来歴: verification; partially-verified; 2026-10-09
- History / 履歴:
  - 2026-10-08: Discovered without a Jev-named query. Initially tracked as a combined System One / typed-decisions signal with Jev as its known implementation. / Jevという名前のクエリなしで発見。当初はJevを既知の実装とする、システムワン / 型付き判断の統合シグナルとして追跡した。
  - 2026-10-08: Added an open implementation and an independent early evidence audit. The interface and latency/cost case strengthened; general accuracy superiority remained unproven. / 公開実装と独立した初期証拠監査を追加。インターフェースと遅延・コスト面は強まったが、一般的な精度優位は未証明のままだった。
  - 2026-10-08: Spawned as a category when OpenAI Decisions, open multimodal models, and a six-model llama.cpp stack established credible cross-vendor convergence around typed probabilistic decisions. / OpenAI Decisions、公開マルチモーダルモデル、6モデルのllama.cppスタックにより、型付き確率的判断への信頼できるベンダー横断収束が成立したためカテゴリとして分離。
  - 2026-10-09: Perplexity, Quyet, and Jebadiah expanded hosted and open implementation diversity; runnable paths strengthened the category while no cross-vendor benchmark established a winner. / Perplexity、Quyet、Jebadiahによりホスト型・公開実装の多様性が拡大。実行可能経路はカテゴリを強化したが、ベンダー横断評価による勝者は未確定。

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

### mcp-use / mcp-use
- Adoption stage / 導入段階: WATCH (38/100)
- Scores / スコア: frontier 78, fit 62, confidence 70
- Recommendation / 推奨: WATCH as a named framework implementation; require official MCP Apps compatibility, a two-host test, and a threat model before piloting. / 名前付きフレームワーク実装としてWATCHする。試行前に公式MCP Apps互換性、2ホスト試験、脅威モデルを必須とする。
- Compatibility / 互換性: UNKNOWN — No official cross-host MCP Apps matrix or Stangyode-side integration has been exercised. / 公式のホスト横断MCP Apps行列もStangyode側統合も検証していない。
- Trade-offs / トレードオフ:
  - A full server, app, inspector, tunnel, and deployment stack reduces integration work, but expands the framework trust boundary. / サーバー、アプリ、検査、トンネル、配備の一体型スタックは統合作業を減らすが、フレームワークの信頼境界を広げる。
  - Active releases show operational momentum, but a tagged release alone does not prove cross-host production compatibility. / 活発なリリースは運用上の勢いを示すが、タグ付きリリースだけではホスト横断の本番互換性を証明しない。
- Provenance / 来歴: verification; partially-verified; 2026-10-09
- History / 履歴:
  - 2026-10-09: Split from the MCP Apps category as a named framework after the 2.8.1 release supplied concrete implementation movement. / 2.8.1リリースで具体的な実装進展が確認されたため、MCP Appsカテゴリから名前付きフレームワークとして分離。

### Gemini agent / Gemini agent
- Adoption stage / 導入段階: WATCH (36/100)
- Scores / スコア: frontier 88, fit 58, confidence 64
- Recommendation / 推奨: WATCH the named launch; require evidence for state reconciliation, delegated identity, authorization, recovery, and auditability before any pilot. / 名前付き発表としてWATCHする。試行前に状態整合、委任ID、認可、復旧、監査可能性の証拠を必須とする。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload, identity policy, or long-running recovery scenario has been tested against Gemini agent. / Gemini agentに対してStangyodeの仕事、ID方針、長時間復旧シナリオを検証していない。
- Trade-offs / トレードオフ:
  - Persistent cross-channel context and identity-bearing sub-agents could reduce re-briefing and clarify delegation, but create larger memory and authorization boundaries. / 永続的なチャネル横断コンテキストと固有ID付きサブエージェントは再説明を減らし委任を明確にし得るが、記憶と認可の境界を広げる。
  - Google reports enterprise use and integrated governance, but independent reliability and recovery evidence for this named agent was not found. / Googleは企業利用と統合ガバナンスを報告するが、この名前付きエージェントの独立した信頼性・復旧証拠は未確認。
- Provenance / 来歴: discovery; partially-verified; 2026-10-09
- History / 履歴:
  - 2026-10-09: Added at WATCH as a high-attention named work agent; persistent execution and delegated identity are material claims, but independent validation is absent. / 高注目の名前付き業務エージェントとしてWATCHに追加。永続実行と委任IDは重要な主張だが、独立検証はない。

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
