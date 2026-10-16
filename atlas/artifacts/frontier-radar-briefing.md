# AI Frontier Radar and Adoption Intelligence / AIフロンティア・レーダーと導入インテリジェンス

Snapshot / スナップショット: 2026-10-16

A bounded evidence inventory for deciding what to watch, test, or defer. / 何を観測し、試し、保留するかを決めるための、範囲を限定した証拠インベントリ。

> Seed items remain seed-era judgments until re-verified. New Radar items must keep provenance, history, and evidence state visible. Sensors are not proof. / シード項目は再検証までシード判断のまま。新規レーダー項目は来歴、履歴、証拠状態を明示する。センサーは証明ではない。

## Radar health / レーダー健全性

As of / 基準時刻: 2026-10-16T06:05:24Z; cadence / 頻度: daily; data / データ: CURRENT; stale after / 期限: 48h

### Pipeline runs / パイプライン実行
- scout: SUCCESS; last success 2026-10-16T06:05:24Z; failure streak 0
- editor: SUCCESS; last success 2026-10-16T06:05:24Z; failure streak 0; last failure rate_limit at 2026-10-15T06:01:28.949Z (resolved)

### Sensors / センサー
- primary-docs: CHECKED
- independent-press: CHECKED
- github-public: CHECKED
- preprint: CHECKED

### First-party sources checked / 確認済み一次情報
- [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control): relevant; checked 2026-10-16; source anthropic-scion
- [GitLab next-generation source code management](https://about.gitlab.com/topics/source-code-management/next-gen-source-code-management): relevant; checked 2026-10-16; source gitlab-next-gen-scm
- [Chinese agent fleet investigation](https://swarmcha.se/posts/chinese-agent-fleet-full-report): relevant; checked 2026-10-16; source tencent-amap-agent-fleet
- [OpenAI and Hugging Face evaluation incident](https://openai.com/index/hugging-face-incident-and-the-road-ahead): relevant; checked 2026-10-16; source openai-huggingface-incident
- [SPACE architecture and lifecycle](https://space.docs.perplexity.ai/guide/architecture.html): relevant; checked 2026-10-16; source space-architecture
- [Perplexity open-sources SPACE](https://www.perplexity.ai/hub/blog/open-sourcing-space): relevant; checked 2026-10-16; source space-open-source
- [Escaping SPACE: Part I](https://www.perplexity.ai/hub/blog/escaping-space-part-i): relevant; checked 2026-10-16; source space-red-team
- [E2B sandbox documentation](https://e2b.dev/docs): relevant; checked 2026-10-16; source e2b-docs
- [Modal Sandboxes](https://modal.com/docs/guide/sandboxes): relevant; checked 2026-10-16; source modal-sandboxes
- [Introducing Figma Specs](https://www.figma.com/blog/introducing-figma-specs): relevant; checked 2026-10-16; source figma-specs
- [Figma Specs availability and access](https://help.figma.com/hc/en-us/articles/44049066011671): relevant; checked 2026-10-16; source figma-specs-help
- [Agent Skills open format](https://agentskills.io): relevant; checked 2026-10-16; source agentskills-home
- [Last Secure Code Benchmark (LSCBench)](https://arxiv.org/abs/2610.14766): relevant; checked 2026-10-16; source lscbench-paper
- [LSCBench repository and Harbor fixtures](https://github.com/alibaba/last-secure-code-benchmark): relevant; checked 2026-10-16; source lscbench-repo

### Queries run / 実行クエリ
### Material hype intake and first-party verification / 重要ハイプ受入と一次情報検証
SPACE, Figma Specs, and LSCBench enter bounded PILOT; in-the-wild agent boundary failures enter as a two-incident WATCH category; Scion remains deferred because it is unavailable. / SPACE、Figma Specs、LSCBenchを限定PILOTへ追加。実環境エージェント境界障害を2件のインシデントに基づくWATCHカテゴリへ追加。Scionは利用不能のため保留継続。

Targets: scion-antique, space, figma-specs, lscbench, in-the-wild-agent-boundary-failures

Evidence: anthropic-scion, tencent-amap-agent-fleet, openai-huggingface-incident, space-architecture, space-open-source, figma-specs, figma-specs-help, lscbench-paper, lscbench-repo

- `exact-name release, alternatives, competitors, adoption, benchmark, criticism, and limitation checks for Scion, Tencent/Amap fleet, SPACE, Figma Specs, and LSCBench`
- `first-party artifact and limitation checks for each investigate-now item`

### SPACE first-party and sibling-implementation challenge / SPACEの一次情報と同等実装による検証
SPACE supplies a strong open lifecycle and security artifact, but E2B and Modal confirm that isolated execution and persistence are not unique; independent escape, restore, deletion, and egress reproduction remain required. / SPACEは強い公開ライフサイクル・安全成果物を提供するが、E2BとModalにより隔離実行と永続性は固有でない。脱出、復元、削除、外向き通信の独立再現が必要。

Targets: space

Evidence: space-architecture, space-open-source, space-red-team, e2b-docs, modal-sandboxes

- `SPACE Perplexity sandbox independent security review escape restore egress limitations`
- `open source stateful agent sandbox Firecracker E2B Modal Daytona persistent snapshots`

### Executable acceptance and incident-control convergence / 実行可能受入とインシデント制御への収束
LSCBench adds executable security acceptance to evaluator-owned artifacts, while two independent incidents supply real boundary-failure cases; neither benchmark scores nor incident severity are interchangeable. / LSCBenchが評価者所有成果物へ実行可能な安全受入を加え、独立した2件のインシデントが実境界障害ケースを提供。ベンチマークスコアも深刻度も相互交換できない。

Targets: lscbench, replayable-evaluator-owned-acceptance-artifacts, in-the-wild-agent-boundary-failures

Evidence: lscbench-paper, lscbench-repo, tencent-amap-agent-fleet, openai-huggingface-incident

- `LSCBench alternatives adoption benchmark criticism contamination and production transfer`
- `autonomous agent incident credential egress evaluation isolation relay detection independent controls`

### Tracked named entities / 追跡中の名前付きエンティティ
- jev, agent-skills, mcp-apps, mcp-use, vercel-skills, ponytail, caveman, gemini-agent, rea, claude-managed-agents, poppy-protocol, scion-antique, dyna-2, american-express-ace, intent-bound-agent-authorization, jevcrawl, tracely, context-mode, agent37, capsem, replayable-evaluator-owned-acceptance-artifacts, minos, space, figma-specs, lscbench, in-the-wild-agent-boundary-failures

### Changelog entries checked / 確認済み変更履歴
- v0, radar-loop-1, radar-loop-2, radar-loop-3, radar-health-1, radar-daily-2026-10-09, radar-daily-2026-10-10, radar-daily-2026-10-11, radar-daily-2026-10-12, radar-daily-2026-10-13, radar-daily-2026-10-14, radar-daily-2026-10-15, radar-daily-2026-10-16

### Explicitly stale sources / 明示的に古い情報源
- a2a-spec; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。
- ard-spec; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。
- anthropic-context; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。

### Findings and decisions / 発見と判断
- material-finding; space, figma-specs, lscbench, in-the-wild-agent-boundary-failures, replayable-evaluator-owned-acceptance-artifacts: Operational evidence is moving toward persistent isolated execution, live design context, executable security acceptance, and incident-derived controls; the artifacts are concrete, but vendor tests, benchmark scores, and incident attribution do not establish local reliability. / 運用証拠は永続隔離実行、生きたデザイン文脈、実行可能な安全受入、インシデント由来制御へ進む。成果物は具体的だが、ベンダー試験、ベンチマーク値、インシデント帰属はローカル信頼性を証明しない。; evidence: space-architecture, space-red-team, e2b-docs, figma-specs, figma-specs-help, lscbench-paper, lscbench-repo, tencent-amap-agent-fleet, openai-huggingface-incident
- editorial-decision; space, figma-specs, lscbench, in-the-wild-agent-boundary-failures, scion-antique: Add SPACE, Figma Specs, and LSCBench as bounded PILOTs and the incident class at WATCH; retain Scion as DEFER and keep acceptance-artifact scores unchanged while adding LSCBench as category evidence. / SPACE、Figma Specs、LSCBenchを限定PILOT、インシデント類型をWATCHへ追加。ScionはDEFERを維持し、LSCBenchをカテゴリ証拠へ加えつつ受入成果物のスコアは変更しない。; evidence: space-architecture, space-red-team, figma-specs, lscbench-paper, tencent-amap-agent-fleet, openai-huggingface-incident, anthropic-scion, gitlab-next-gen-scm

## Signals / シグナル

### Agent Skills / Agent Skills
- Adoption stage / 導入段階: WATCH (58/100)
- Scores / スコア: frontier 83, fit 78, confidence 78
- Recommendation / 推奨: WATCH with task-scoped visibility, pinned provenance, permission review, rollback, runtime audit, and paired task-success checks; distribution and token savings do not establish benefit. / タスク別表示、固定来歴、権限レビュー、ロールバック、実行時監査、対比較のタスク成功確認を伴ってWATCHする。配布可能性とトークン削減は有効性を証明しない。
- Compatibility / 互換性: UNKNOWN — Host, permission, and instruction-loading compatibility remains untested across named clients. / 指定したクライアント間でのホスト、権限、指示読み込みの互換性は未検証。
- Trade-offs / トレードオフ:
  - Portable instructions can improve reuse, but hidden dependencies can weaken reviewability. / 移植可能な指示は再利用性を高めるが、隠れた依存関係はレビュー可能性を下げる。
  - Progressive disclosure reduces context load, but adds packaging and lifecycle work. / 段階的開示はコンテキスト負荷を減らすが、パッケージ化とライフサイクル作業が増える。
- Provenance / 来歴: verification; partially-verified; 2026-10-11
- History / 履歴:
  - 2026-09-24: Seeded for watch-list review. / ウォッチリスト確認用にシード。
  - 2026-10-08: Added implementation evidence for cross-client installation and update semantics; high attention supports WATCH, while provenance and permission controls remain weak. / クライアント横断のインストールと更新機能の実装証拠を追加。高い注目はWATCHを支持するが、来歴と権限制御は弱いまま。
  - 2026-10-10: Vercel skills 1.7.2 strengthened dependency and workspace distribution semantics; category readiness rose slightly while trust and permission controls remain unsettled. / Vercel skills 1.7.2が依存関係とワークスペース配布規則を強化。カテゴリ準備度をわずかに上げたが、信頼と権限制御は未確定。
  - 2026-10-11: SkillFS and Cloudflare added governance and remote-distribution implementations; preliminary paired evaluation found mostly neutral and some harmful skills, raising confidence in stricter gates rather than readiness. / SkillFSとCloudflareが統治・遠隔配布実装を追加。予備的対比較評価では多くが中立で一部が有害であり、準備度ではなく厳格なゲートへの確信を高めた。

### MCP Apps / MCP Apps
- Adoption stage / 導入段階: WATCH (54/100)
- Scores / スコア: frontier 81, fit 65, confidence 74
- Recommendation / 推奨: Watch as a typed tool-to-UI stack; require a narrow cross-host compatibility test and threat model before any pilot. / 型付きツールからUIへのスタックとして観測する。試行前に限定的なホスト横断互換性テストと脅威モデルを必須とする。
- Compatibility / 互換性: UNKNOWN — The Atlas records the protocol concept, not compatibility with Stangyode's static site or a chosen host. / アトラスが記録するのはプロトコル概念であり、Stangyodeの静的サイトや特定ホストとの互換性ではない。
- Trade-offs / トレードオフ:
  - Tool results can become more usable, but the host becomes part of the product contract. / ツール結果は使いやすくなるが、ホストが製品契約の一部になる。
  - Richer interaction can reduce handoff friction, but increases UI and security surface. / 豊かな操作は引き継ぎ摩擦を減らすが、UIとセキュリティ面を広げる。
- Provenance / 来歴: verification; partially-verified; 2026-10-10
- History / 履歴:
  - 2026-09-24: Seeded as a protocol watch item. / プロトコルの観測項目としてシード。
  - 2026-10-08: Added an active full-stack framework and the July protocol changelog; typed UI contracts are real, but production compatibility remains unverified. / 活発なフルスタック・フレームワークと7月のプロトコル変更履歴を追加。型付きUI契約は実在するが、本番互換性は未検証。
  - 2026-10-10: Official documentation now names support across multiple independent hosts; adoption evidence improved, but host behavior still varies and no compatibility test was run. / 公式資料が複数の独立ホスト対応を明記。導入証拠は改善したが、ホスト挙動はなお異なり、互換性試験も未実施。

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
- Scores / スコア: frontier 72, fit 66, confidence 70
- Recommendation / 推奨: WATCH as a named code-minimization skill; test on one real task and reject line-count or token savings that reduce task success. / 名前付きコード最小化スキルとしてWATCHする。実作業一件で検証し、タスク成功率を下げる行数・トークン削減は棄却する。
- Compatibility / 互換性: UNKNOWN — No canonical artifact or compatibility evidence was supplied for this seed. / このシードには正規アーティファクトも互換性の証拠も提供されていない。
- Trade-offs / トレードオフ:
  - Shorter instructions and code can reduce review surface, but minimal output can omit necessary behavior. / 短い指示とコードはレビュー面を減らせるが、最小出力は必要な振る舞いを欠く可能性がある。
  - The shortcut ledger preserves intentional debt, but effectiveness evidence remains project-authored. / shortcut台帳は意図的負債を残すが、有効性の証拠はプロジェクト自身の報告に留まる。
- Provenance / 来歴: verification; partially-verified; 2026-10-10
- History / 履歴:
  - 2026-09-24: Added as an unverified candidate; no evidence collected. / 未検証候補として追加。証拠は収集していない。
  - 2026-10-09: Verified the 5.1.0 release and neutral shortcut ledger; project-authored outcome claims justify learning, not adoption. / 5.1.0リリースと中立なshortcut台帳を確認。プロジェクト自身の成果主張は学習には値するが導入根拠にはならない。
  - 2026-10-10: Benchmark judging was hardened around delivered diffs, blinded markers, timeout separation, and self-test gates; confidence rose slightly, but the evidence remains project-authored. / 提出差分、盲検化、タイムアウト分離、自己テストゲートによりベンチマーク判定を強化。信頼度をわずかに上げたが、証拠はプロジェクト自身の報告。

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
- Scores / スコア: frontier 64, fit 44, confidence 76
- Recommendation / 推奨: WATCH Jev as a commoditizing text-only comparison target, not the category default; benchmark it against Microsoft-Decision-1, Clef, Perplexity, open decider models, and calibrated baselines before adoption. / Jevをカテゴリ標準ではなくコモディティ化するテキスト専用比較対象としてWATCHする。導入前にMicrosoft-Decision-1、Clef、Perplexity、公開deciderモデル、較正済みベースラインと比較する。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload has been run against Jev, and vendor quality or calibration claims have not been independently reproduced here. / Stangyodeの仕事をJevで実行しておらず、ベンダーの品質・較正主張もここでは独立再現していない。
- Trade-offs / トレードオフ:
  - Jev offers typed, parse-free answers and vendor-reported low latency and cost, but it remains early-access and text-only. / Jevは解析不要の型付き回答とベンダー報告の低遅延・低コストを提供するが、早期アクセスかつテキスト専用である。
  - Clef-omni now adds native audio and video while Clef-flash undercuts Jev’s listed input price; these are competitor capabilities and reduce Jev-specific differentiation rather than strengthen Jev. / Clef-omniは音声・動画をネイティブ対応し、Clef-flashはJevの掲載入力価格を下回る。これらは競合能力であり、Jevを強化せずJev固有の差別化を下げる。
- Provenance / 来歴: verification; partially-verified; 2026-10-11
- History / 履歴:
  - 2026-10-08: Initially discovered inside a combined System One / typed-decisions record. / 当初はシステムワン / 型付き判断の統合レコード内で発見された。
  - 2026-10-08: Split into a named-entity record after multiple equivalents emerged. Jev remains WATCH, but its implementation-specific fit and differentiation were lowered. / 複数の同等実装が登場したため名前付きエンティティへ分離。JevはWATCHを維持するが、実装固有の適合度と差別化を引き下げた。
  - 2026-10-09: Perplexity Decisions, Quyet, and Jebadiah added more direct substitutes without a verified Jev capability release; Jev-specific frontier and fit scores fell again. / Jevの能力リリースは確認されない一方、Perplexity Decisions、Quyet、Jebadiahという直接代替が増え、Jev固有のフロンティア性と適合度を再度引き下げた。
  - 2026-10-10: Jev remained on version 1.13 and text-only while Clef-omni added audio/video and Clef-flash listed a lower input price; Jev-specific frontier and fit fell without changing its WATCH stage. / Jevは1.13・テキスト専用のまま、Clef-omniが音声・動画を追加し、Clef-flashがより低い入力価格を掲載。WATCH段階は維持しつつ、Jev固有のフロンティア性と適合度を引き下げた。
  - 2026-10-11: Microsoft-Decision-1 added a major enterprise-hosted equivalent without a new Jev capability release; Jev-specific frontier and fit fell while WATCH remained unchanged. / Jevの新機能リリースがない中でMicrosoft-Decision-1が主要企業のホスト型同等実装を追加。WATCHは維持しつつJev固有のフロンティア性と適合度を引き下げた。

### Typed probabilistic decision models / 型付き確率的判断モデル
- Adoption stage / 導入段階: WATCH (60/100)
- Scores / スコア: frontier 95, fit 85, confidence 92
- Recommendation / 推奨: WATCH for cheap classification, routing, verification, abstention, and escalation; benchmark local workloads against calibrated classifiers and label-probability baselines before choosing an implementation. / 低コストの分類、ルーティング、検証、棄却、エスカレーション用途としてWATCHする。実装選定前に、実際の仕事を較正済み分類器とラベル確率ベースラインに対して評価する。
- Compatibility / 互換性: UNKNOWN — Adoption paths exist for hosted, open-weight, local, text, and multimodal use, but no implementation has been benchmarked on a Stangyode workload. / ホスト型、公開ウェイト、ローカル、テキスト、マルチモーダルの導入経路はあるが、Stangyodeの仕事で評価した実装はない。
- Trade-offs / トレードオフ:
  - Bounded predicate, choice, and score outputs avoid free-text parsing and expose probabilities in one pass, but task-specific calibration still has to be measured. / 限定されたpredicate、choice、score出力は自由文解析を避け、一回の推論で確率を示すが、仕事固有の較正は測定が必要である。
  - Hosted, open-weight, CPU/GPU, local, fully multimodal, and provider-neutral gateway paths now exist; calibration, robustness, deployment, and price—not interface novelty—decide between them. / ホスト型、公開ウェイト、CPU/GPU、ローカル、完全マルチモーダル、プロバイダー中立ゲートウェイの経路が揃った。実装選定はインターフェースの新規性ではなく、較正、堅牢性、配備、価格で決まる。
- Provenance / 来歴: verification; partially-verified; 2026-10-11
- History / 履歴:
  - 2026-10-08: Discovered without a Jev-named query. Initially tracked as a combined System One / typed-decisions signal with Jev as its known implementation. / Jevという名前のクエリなしで発見。当初はJevを既知の実装とする、システムワン / 型付き判断の統合シグナルとして追跡した。
  - 2026-10-08: Added an open implementation and an independent early evidence audit. The interface and latency/cost case strengthened; general accuracy superiority remained unproven. / 公開実装と独立した初期証拠監査を追加。インターフェースと遅延・コスト面は強まったが、一般的な精度優位は未証明のままだった。
  - 2026-10-08: Spawned as a category when OpenAI Decisions, open multimodal models, and a six-model llama.cpp stack established credible cross-vendor convergence around typed probabilistic decisions. / OpenAI Decisions、公開マルチモーダルモデル、6モデルのllama.cppスタックにより、型付き確率的判断への信頼できるベンダー横断収束が成立したためカテゴリとして分離。
  - 2026-10-09: Perplexity, Quyet, and Jebadiah expanded hosted and open implementation diversity; runnable paths strengthened the category while no cross-vendor benchmark established a winner. / Perplexity、Quyet、Jebadiahによりホスト型・公開実装の多様性が拡大。実行可能経路はカテゴリを強化したが、ベンダー横断評価による勝者は未確定。
  - 2026-10-10: Clef-omni added native audio and video, while listed price, hosted latency, and internal-use evidence strengthened category readiness; no independent cross-vendor benchmark established a winner. / Clef-omniが音声・動画をネイティブ対応し、掲載価格、ホスト遅延、社内利用証拠によりカテゴリ準備度を強化。ただし独立したベンダー横断評価による勝者は未確定。
  - 2026-10-11: Microsoft-Decision-1 and Mapika decider added major hosted and open paths; category adoption strengthened while workload calibration and the winning implementation remain unsettled. / Microsoft-Decision-1とMapika deciderが主要なホスト型・公開経路を追加。カテゴリの導入準備は強まったが、仕事固有の較正と勝者は未確定。

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
- Provenance / 来歴: verification; partially-verified; 2026-10-10
- History / 履歴:
  - 2026-10-09: Split from the MCP Apps category as a named framework after the 2.8.1 release supplied concrete implementation movement. / 2.8.1リリースで具体的な実装進展が確認されたため、MCP Appsカテゴリから名前付きフレームワークとして分離。
  - 2026-10-10: Version 2.8.2 supplied concrete tunnel-cancellation and navigation maintenance without changing the WATCH judgment or establishing cross-host compatibility. / 2.8.2はトンネルキャンセルと導線の具体的な保守を追加したが、WATCH判断やホスト横断互換性の証明は変わらない。

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

### Vercel skills / Vercel skills
- Adoption stage / 導入段階: WATCH (42/100)
- Scores / スコア: frontier 76, fit 72, confidence 74
- Recommendation / 推奨: WATCH as a named Agent Skills installer and updater; use only reviewed, pinned sources with lock and permission audits. / 名前付きAgent Skillsインストーラー・更新ツールとしてWATCHする。レビュー済み固定ソースのみを使い、ロックと権限を監査する。
- Compatibility / 互換性: UNKNOWN — No pinned-source, dependency-supplied, or cross-client installation audit has been run for this project. / このプロジェクトでは固定ソース、依存関係由来、クライアント横断の導入監査を実施していない。
- Trade-offs / トレードオフ:
  - Workspace, dependency, Git, and npm discovery reduce distribution friction, but also widen the provenance and update surface. / ワークスペース、依存関係、Git、npmの発見は配布摩擦を減らすが、来歴と更新の攻撃面も広げる。
  - Lock and removal semantics are improving, but installability and multi-agent reach do not establish skill safety or task-success gains. / ロックと削除規則は改善しているが、導入可能性と複数エージェント対応はスキル安全性やタスク成功改善を証明しない。
- Provenance / 来歴: verification; partially-verified; 2026-10-10
- History / 履歴:
  - 2026-10-10: Split from the Agent Skills category as a named installer after 1.7.2 added substantial workspace and dependency distribution behavior. / 1.7.2がワークスペースと依存関係配布の大幅な挙動を追加したため、Agent Skillsカテゴリから名前付きインストーラーとして分離。

### Agent-independent execution evidence / エージェント非依存の実行証拠
- Adoption stage / 導入段階: WATCH (34/100)
- Scores / スコア: frontier 88, fit 90, confidence 78
- Recommendation / 推奨: WATCH and learn the pattern: collect evaluator-owned runtime evidence outside the agent before trusting self-reports or outcome-only checks; require a bounded local reproduction before PILOT. / パターンとしてWATCHし学習する。自己報告や成果物だけの検査を信頼する前に、評価者所有の実行時証拠をエージェント外部で収集する。PILOT前に限定的なローカル再現を必須とする。
- Compatibility / 互換性: UNKNOWN — Neither implementation has been reproduced on a Stangyode coding-agent task, and their OS-level and game-runtime observation layers cover different domains. / どちらの実装もStangyodeのコーディングエージェント作業では再現しておらず、OS層とゲーム実行層という異なる領域を観測する。
- Trade-offs / トレードオフ:
  - OS/network observation and evaluator-owned probes reveal behavior that trajectories and final-result tests miss, but each observation boundary remains incomplete outside its domain. / OS・ネットワーク観測と評価者所有プローブは軌跡や最終結果テストが見逃す挙動を示すが、各観測境界は対象領域外では不完全。
  - Deterministic evidence improves auditability, but isolated environments, instrumentation contracts, and semantic probes add cost and maintenance. / 決定論的証拠は監査可能性を高めるが、隔離環境、計測契約、意味プローブのコストと保守が増える。
- Provenance / 来歴: discovery; partially-verified; 2026-10-10
- History / 履歴:
  - 2026-10-10: Spawned as a category when AgentSpy and SWE-Game independently showed that externally collected runtime evidence catches behavior missed by self-reports, outcome tests, or video-only judging. / AgentSpyとSWE-Gameが、外部収集した実行時証拠は自己報告、成果物テスト、動画のみの判定が見逃す挙動を捉えると独立に示したためカテゴリ化。

### Pre-generation memory validity / 生成前メモリ有効性
- Adoption stage / 導入段階: WATCH (46/100)
- Scores / スコア: frontier 86, fit 92, confidence 82
- Recommendation / 推奨: WATCH and learn the pattern: resolve active values, identity, provenance, and abstention before memory enters the prompt; require a bounded replay of changing real profiles before PILOT. / パターンとしてWATCHし学習する。メモリをプロンプトへ入れる前に、有効値、本人同定、来歴、棄却を解決する。PILOT前に変化する実プロフィールの限定再生試験を必須とする。
- Compatibility / 互換性: UNKNOWN — No Stangyode profile history has been replayed through either implementation, and the two studies use controlled datasets rather than this workload. / Stangyodeのプロフィール履歴をどちらの実装でも再生しておらず、2研究もこの仕事ではなく制御データセットを使用している。
- Trade-offs / トレードオフ:
  - Active-only retrieval can prevent obsolete values from reaching generation, but incorrect merges or identity assignment can silently hide current facts. / 有効値のみの検索は古い値の生成到達を防げるが、誤った統合や本人同定は現在の事実を静かに隠し得る。
  - Temporal provenance makes updates auditable, but re-reads and genuine reversions remain ambiguous without trustworthy change evidence. / 時間的来歴は更新を監査可能にするが、信頼できる変更証拠がなければ再読と正当な復帰は区別できない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-11
- History / 履歴:
  - 2026-10-11: Spawned at WATCH when independent stale-memory studies aligned with separately operated supersession and temporal-validity implementations. / 独立した古いメモリ研究と、別運営の置換・時間的有効性実装が整合したためWATCHでカテゴリ化。

### REA / Reverse Engineer Anything / REA / Reverse Engineer Anything
- Adoption stage / 導入段階: WATCH (46/100)
- Scores / スコア: frontier 84, fit 60, confidence 82
- Recommendation / 推奨: WATCH; if needed, run a legally cleared known-answer pilot on one owned binary before relying on it for reverse-engineering conclusions. / WATCH。必要なら、リバースエンジニアリング結論を信頼する前に、法的に許可された所有バイナリ1件で既知正解付き試行を行う。
- Compatibility / 互換性: UNKNOWN — No owned binary, known-answer corpus, legal scope, or local tool-permission boundary has been tested. / 所有バイナリ、既知正解コーパス、法的範囲、ローカル道具権限境界を試験していない。
- Trade-offs / トレードオフ:
  - It unifies mature reverse-engineering tools behind agent-friendly evidence contracts, but does not replace analyst judgment or make negative findings conclusive. / 成熟したリバースエンジニアリング道具をエージェント向け証拠契約で統合するが、分析者判断を置き換えず、否定的発見を確定もしない。
  - An independent real-app test found correct reported locations and a novel channel, yet missed all eight reply paths; value is workload-dependent. / 独立した実アプリ試験では報告位置と新規チャネルは正しかった一方、8件の返信経路をすべて見逃しており、価値は仕事に依存する。
- Provenance / 来歴: discovery; partially-verified; 2026-10-13
- History / 履歴:
  - 2026-10-13: Added at WATCH after extreme attention was paired with concrete functionality and independent evidence of both useful hits and important misses. / 極端な注目に具体的機能と、有用な発見・重要な見逃しの両方を示す独立証拠が伴ったためWATCHへ追加。

### Claude Managed Agents / Claude Managed Agents
- Adoption stage / 導入段階: PILOT (55/100)
- Scores / スコア: frontier 91, fit 82, confidence 84
- Recommendation / 推奨: PILOT only on a bounded low-risk workflow with explicit token, task-success, state-correction, retention, and recovery metrics. / トークン、タスク成功、状態修正、保持、復旧の指標を明示した低リスクの限定ワークフローでのみPILOTする。
- Compatibility / 互換性: UNKNOWN — No Stangyode workflow has been run against the beta, and its current retention eligibility may conflict with regulated workloads. / Stangyodeの仕事ではベータを実行しておらず、現在の保持適格性は規制対象業務と衝突し得る。
- Trade-offs / トレードオフ:
  - Persistent event history, schedules, budgets, parallel workflows, and sandbox choices reduce custom harness work, but increase provider and state-retention coupling. / 永続イベント履歴、スケジュール、予算、並列ワークフロー、サンドボックス選択は自作ハーネス作業を減らすが、プロバイダーと状態保持への結合を増やす。
  - The feature is beta, run limits and duplicate tool calls require defensive design, and Managed Agents is not currently eligible for ZDR or HIPAA BAA coverage. / 機能はベータで、実行制限と重複ツール呼び出しには防御的設計が必要。Managed Agentsは現在ZDRやHIPAA BAAの対象外。
- Provenance / 来歴: discovery; partially-verified; 2026-10-13
- History / 履歴:
  - 2026-10-13: Added at PILOT as a named beta platform with concrete durable execution, observability, budget, scheduling, and failure-isolation controls. / 耐久実行、可観測性、予算、スケジュール、失敗隔離の具体的制御を持つ名前付きベータ基盤としてPILOTへ追加。

### Harness-owned long-horizon state / ハーネス所有の長期状態
- Adoption stage / 導入段階: PILOT (62/100)
- Scores / スコア: frontier 93, fit 94, confidence 90
- Recommendation / 推奨: PILOT the pattern: keep task state, evidence, queues, budgets, and verification outside model conversations; reconstruct bounded role-specific contexts and compare against history-heavy runs. / このパターンをPILOTする。タスク状態、証拠、キュー、予算、検証をモデル会話の外に置き、限定された役割別コンテキストを再構築して履歴依存実行と比較する。
- Compatibility / 互換性: UNKNOWN — The pattern matches Stangyode’s artifact and worktree discipline, but no controlled comparison has measured token cost, correction quality, or recovery. / このパターンはStangyodeの成果物・ワークツリー規律と合うが、トークン費用、修正品質、復旧を測る対照比較は未実施。
- Trade-offs / トレードオフ:
  - External state and fresh contexts can reduce context growth, duplicated work, and crash loss, but the harness becomes the correctness and synchronization boundary. / 外部状態と新規コンテキストは文脈肥大、重複作業、クラッシュ損失を減らし得るが、ハーネスが正しさと同期の境界になる。
  - Research reports large token gains and production harnesses expose concrete primitives, but cross-workload superiority and vendor scale claims are not independently established. / 研究は大幅なトークン改善を報告し、本番ハーネスは具体的プリミティブを示すが、仕事横断の優位性やベンダーの規模主張は独立確認されていない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-13
- History / 履歴:
  - 2026-10-13: Spawned at PILOT after research evidence and four independent implementations converged on externalized state, bounded contexts, explicit queues, isolation, and verification. / 研究証拠と4件の独立実装が、外部化状態、限定コンテキスト、明示的キュー、隔離、検証へ収束したためPILOTでカテゴリ化。

### Dyna-2 / Dyna-2.1 / Dyna-2 / Dyna-2.1
- Adoption stage / 導入段階: WATCH (42/100)
- Scores / スコア: frontier 88, fit 38, confidence 76
- Recommendation / 推奨: WATCH; require repeated-shift completion, intervention and recovery distributions, transfer beyond uniform laundry, and total-cost data before considering a pilot. / WATCH。試行前に、複数シフトの完遂率、介入・復旧分布、均一な洗濯物を超える転移、総費用データを求める。
- Compatibility / 互換性: UNKNOWN — Stangyode has no physical-agent workload, facility, safety case, or integration path for evaluating this system. / Stangyodeにはこのシステムを評価する物理エージェント業務、施設、安全ケース、統合経路がない。
- Trade-offs / トレードオフ:
  - The orchestrator/controller/model split and uncut workflow show meaningful system integration, but one vendor demo is not a reliability distribution. / オーケストレータ・制御器・モデルの分離と無編集工程は意味ある統合を示すが、単一ベンダーデモは信頼性分布ではない。
  - Independent review supports sustained narrow folding operation, while broader clothing transfer, repeated deployment, and unit economics remain unproven. / 独立調査は狭い折り畳みの長時間運転を支持するが、衣類全般への転移、反復配備、単位経済性は未証明。
- Provenance / 来歴: discovery; partially-verified; 2026-10-14
- History / 履歴:
  - 2026-10-14: Added at WATCH because the hour-long integrated workflow is concrete, while independent evidence remains narrow and does not establish general reliability. / 1時間の統合工程は具体的だが、独立証拠は狭く汎用信頼性を成立させないためWATCHへ追加。

### American Express ACE / American Express ACE
- Adoption stage / 導入段階: WATCH (38/100)
- Scores / スコア: frontier 82, fit 44, confidence 78
- Recommendation / 推奨: WATCH; treat ACE as a controlled-access Amex implementation and wait for live merchant integrations, authorization outcomes, dispute evidence, and availability of all announced service areas. / WATCH。ACEを利用制限付きAmex実装として扱い、実加盟店統合、認可成果、紛争証拠、発表済み全機能の提供を待つ。
- Compatibility / 互換性: UNKNOWN — There is no Stangyode commerce workflow, Amex developer onboarding, or transaction corpus against which to test ACE. / StangyodeにはACEを試す商取引工程、Amex開発者オンボーディング、取引コーパスがない。
- Trade-offs / トレードオフ:
  - ACE connects verified agents, purchase intent, tokenized credentials, spend controls, and cart context within Amex’s network, but some service areas remain under development. / ACEはAmex網内で検証済みエージェント、購入意図、トークン化資格情報、支出制御、カート文脈を結ぶが、一部機能は開発中。
  - Purchase-protection language is conditional, and no public measurement yet shows lower fraud, fewer disputes, or broader production adoption. / 購入保護の表現は条件付きで、不正減少、紛争削減、広範な本番採用を示す公開測定はまだない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-14
- History / 履歴:
  - 2026-10-14: Added as a separate named WATCH implementation; cross-vendor evidence belongs to the durable authorization category, not to ACE alone. / 独立した名前付きWATCH実装として追加。組織横断証拠はACE単体でなく耐久的認可カテゴリに帰属する。

### Intent-bound agent authorization / 意図拘束型エージェント認可
- Adoption stage / 導入段階: WATCH (52/100)
- Scores / スコア: frontier 90, fit 78, confidence 88
- Recommendation / 推奨: WATCH the category; require explicit agent identity, signed or otherwise verifiable user intent, bounded credentials, replay resistance, and auditable settlement, while separately testing reasoning-layer manipulation. / カテゴリをWATCH。明示的エージェントID、署名または検証可能なユーザー意図、限定資格情報、再送耐性、監査可能な決済を求め、推論層操作は別途試験する。
- Compatibility / 互換性: UNKNOWN — The principles align with approval-gated automation, but Stangyode has no payment-agent path on which to measure authorization, dispute, or recovery outcomes. / 原則は承認ゲート付き自動化と整合するが、Stangyodeには認可・紛争・復旧成果を測る決済エージェント経路がない。
- Trade-offs / トレードオフ:
  - American Express, Google, Visa, and Mastercard converge on an authorization and evidence layer, but their implementations span issuer, open-protocol, merchant-edge, and network-tokenization roles rather than one interoperable standard. / American Express、Google、Visa、Mastercardは認可・証拠層へ収束するが、実装は発行者、公開プロトコル、加盟店境界、ネットワークトークン化にまたがり、単一相互運用標準ではない。
  - Cryptographic mandates prove what was authorized; they do not prove that a model interpreted intent correctly or resisted prompt injection before signing. / 暗号学的マンデートは認可内容を証明するが、署名前にモデルが意図を正しく解釈し、プロンプト注入に耐えたことまでは証明しない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-14
- History / 履歴:
  - 2026-10-14: Spawned at WATCH after four payment organizations converged on verifiable identity, bounded intent, scoped credentials, and transaction evidence; maturity and reasoning integrity remain unsettled. / 4決済組織が検証可能ID、限定意図、範囲付き資格情報、取引証拠へ収束したためWATCHでカテゴリ化。成熟度と推論完全性は未確定。

### Tracely / Tracely
- Adoption stage / 導入段階: PILOT (52/100)
- Scores / スコア: frontier 78, fit 86, confidence 64
- Recommendation / 推奨: PILOT only on a non-critical fixture set: measure false blocks, missed regressions, replay fidelity, reviewer corrections, and maintenance cost before allowing a gate to block merges. / 非重要fixture群だけでPILOT。ゲートにマージを阻止させる前に、誤阻止、見逃し、再生忠実度、レビュー修正、保守費用を測る。
- Compatibility / 互換性: UNKNOWN — The regression-gate pattern fits the repository’s deterministic checks, but no Tracely fixture, privacy boundary, or false-block baseline has been evaluated. / 回帰ゲートのパターンはリポジトリの決定論的検査に合うが、Tracely fixture、プライバシー境界、誤阻止基準は未評価。
- Trade-offs / トレードオフ:
  - Promoting real failures into replayable regression cases closes a useful loop between observability and CI, and deterministic fixtures can avoid model spend and flakiness. / 実障害を再生可能な回帰ケースへ昇格することで可観測性とCIの循環が閉じ、決定論的fixtureはモデル費用と不安定性を避け得る。
  - Trace selection, evaluator calibration, privacy, and fixture staleness can create false confidence or block healthy changes; no independent production outcome study was found. / トレース選択、評価器校正、プライバシー、fixture陳腐化は誤った確信や健全変更の阻止を招き得る。独立した本番成果研究は見つからない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-14
- History / 履歴:
  - 2026-10-14: Added at PILOT for a bounded, non-blocking evaluation of trace-derived regression gates; independent outcome evidence is still absent. / トレース由来回帰ゲートの限定・非阻止評価としてPILOTへ追加。独立成果証拠はまだない。

### Context Mode / Context Mode
- Adoption stage / 導入段階: PILOT (58/100)
- Scores / スコア: frontier 86, fit 92, confidence 82
- Recommendation / 推奨: PILOT only in a disposable repository with paired tasks; measure task success, retrieval misses, latency, crashes, permission-boundary behavior, and recovery after compaction. / 使い捨てリポジトリで対比較課題に限定してPILOT。課題成功率、検索漏れ、遅延、クラッシュ、権限境界動作、圧縮後復旧を測る。
- Compatibility / 互換性: UNKNOWN — The pattern fits long Hermes and coding sessions, but no Stangyode task has measured quality, security, latency, or recovery. / 長時間のHermes・コーディングセッションに合う可能性はあるが、Stangyode課題で品質、安全性、遅延、復旧を測っていない。
- Trade-offs / トレードオフ:
  - Interception, local full-text retrieval, and continuity can keep bulky output out of the active window, but maintainer byte savings do not establish better task outcomes. / 遮断、ローカル全文検索、継続性は巨大出力を作業文脈から外せるが、保守者のバイト削減値は課題成果改善を証明しない。
  - Host support is uneven, MCP tools enlarge the execution trust boundary, and retrieval can hide evidence the agent fails to request. / ホスト対応は不均一で、MCPツールは実行信頼境界を広げ、検索されない証拠を隠す可能性がある。
- Provenance / 来歴: discovery; partially-verified; 2026-10-15
- History / 履歴:
  - 2026-10-15: Added at PILOT because the implementation is concrete and operationally relevant, while end-to-end quality and security benefit remain unverified. / 実装が具体的で運用上関連する一方、エンドツーエンド品質と安全上の利点は未検証のためPILOTへ追加。

### Agent37 / Agent37
- Adoption stage / 導入段階: PILOT (52/100)
- Scores / スコア: frontier 84, fit 82, confidence 78
- Recommendation / 推奨: PILOT one disposable restore-and-egress workload; verify deny rules, credential boundaries, cold and warm recovery, backup fidelity, startup health, throughput, and full retained-state cost. / 使い捨ての復元・外向き通信ワークロードを1件PILOT。拒否規則、資格情報境界、低温・温間復旧、バックアップ忠実度、起動健全性、処理量、保持状態の総費用を検証する。
- Compatibility / 互換性: UNKNOWN — It may fit isolated experiments, but no Agent37 instance, network policy, credential flow, or restore was exercised for Stangyode. / 隔離実験に合う可能性はあるが、Stangyode向けにAgent37インスタンス、ネットワーク方針、資格情報フロー、復元を試していない。
- Trade-offs / トレードオフ:
  - Persistent instances, explicit lifecycle APIs, backup/restore, and sleep/wake behavior are directly usable building blocks for long-running agents. / 永続インスタンス、明示的ライフサイクルAPI、バックアップ・復元、スリープ・復帰は長時間エージェントに直接使える構成要素。
  - Vendor documentation describes behavior, not independent restore reliability, isolation resistance, sustained throughput, or comparative economics. / ベンダー資料は動作を説明するが、独立した復元信頼性、隔離耐性、継続処理量、比較経済性は示さない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-15
- History / 履歴:
  - 2026-10-15: Added at PILOT for one bounded lifecycle and egress evaluation; broad reliability, security, throughput, and cost claims remain unverified. / 限定したライフサイクル・外向き通信評価1件のPILOTへ追加。広範な信頼性、安全性、処理量、費用主張は未検証。

### Replayable evaluator-owned acceptance artifacts / 再生可能な評価者所有の受入成果物
- Adoption stage / 導入段階: WATCH (54/100)
- Scores / スコア: frontier 90, fit 94, confidence 86
- Recommendation / 推奨: WATCH the category and PILOT one repository-owned acceptance suite only after pinning fixtures, environment, judge, scoring contract, privacy boundary, and reviewer-correction workflow. / カテゴリをWATCHし、fixture、環境、判定モデル、採点契約、プライバシー境界、レビュー修正手順を固定してから、リポジトリ所有の受入スイートを1件だけPILOTする。
- Compatibility / 互換性: UNKNOWN — The pattern strongly matches Stangyode regression discipline, but none of the four artifacts has been calibrated against this repository or its defect history. / このパターンはStangyodeの回帰規律に強く合うが、4成果物のいずれも本リポジトリや欠陥履歴に対して校正されていない。
- Trade-offs / トレードオフ:
  - Versioned fixtures, frozen submissions, held-out cases, and explicit score contracts make verification reviewable and replayable instead of trusting completion claims. / 版管理fixture、固定提出物、非公開ケース、明示採点契約により、完了主張を信じる代わりに検証をレビュー・再生可能にする。
  - The implementations measure different targets; model judges, public corpora, fixture drift, and weak transfer to local defects can still produce false confidence. / 各実装の測定対象は異なり、モデル判定、公開コーパス、fixture変動、ローカル欠陥への弱い転移が誤った確信を生み得る。
- Provenance / 来歴: discovery; partially-verified; 2026-10-16
- History / 履歴:
  - 2026-10-15: Spawned at WATCH after three independent implementations converged on evaluator-owned, versioned, replayable acceptance evidence while retaining incompatible scopes and judge limits. / 3つの独立実装が評価者所有・版管理・再生可能な受入証拠へ収束したためWATCHでカテゴリ化。対象の非互換性と判定限界は保持。
  - 2026-10-16: LSCBench added executable secure-code fixtures as a fourth independent implementation; WATCH status and scores remain unchanged because benchmark scopes and transfer limits are not interchangeable. / LSCBenchの実行可能な安全コードfixtureを4番目の独立実装として追加。ベンチマーク範囲と転移限界は互換でないため、WATCH状態とスコアは変更しない。

### SPACE / SPACE
- Adoption stage / 導入段階: PILOT (60/100)
- Scores / スコア: frontier 91, fit 84, confidence 88
- Recommendation / 推奨: PILOT one disposable restore-and-egress workload; verify deny rules, scoped credentials, snapshot fidelity, deletion, crash recovery, startup health, throughput, and retained-state cost. / 使い捨ての復元・外向き通信ワークロードを1件PILOT。拒否規則、範囲付き資格情報、スナップショット忠実度、削除、クラッシュ復旧、起動健全性、処理量、保持費用を検証する。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload has yet measured this candidate against its promised outcome, operational boundary, and failure modes. / この候補はStangyodeのワークロードで、期待成果、運用境界、障害モードに対してまだ測定していない。
- Trade-offs / トレードオフ:
  - Open Firecracker isolation, explicit lifecycle state, scoped attachment tokens, egress policy, snapshots, and E2B compatibility form a concrete self-hostable runtime. / 公開Firecracker隔離、明示ライフサイクル状態、範囲付き接続トークン、外向き通信方針、スナップショット、E2B互換性が具体的なセルフホスト実行基盤を成す。
  - Perplexity’s own tests found network-policy bypasses before remediation; finite vendor reruns do not establish escape resistance, restore reliability, or operating economics. / Perplexity自身の試験で修正前のネットワーク方針回避が見つかった。有限のベンダー再試験は脱出耐性、復元信頼性、運用経済性を確立しない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-16
- History / 履歴:
  - 2026-10-16: Added at PILOT with a bounded recommendation; evidence is concrete but not independent proof of local reliability or fit. / PILOTへ限定的推奨付きで追加。証拠は具体的だが、ローカル信頼性や適合性の独立証明ではない。

### Figma Specs / Figma Specs
- Adoption stage / 導入段階: PILOT (56/100)
- Scores / スコア: frontier 80, fit 72, confidence 78
- Recommendation / 推奨: PILOT one real design-to-code handoff with paired baseline work; measure corrections, stale-context incidents, delivery quality, MCP friction, exportability, and cross-harness reuse. / 実際のデザインからコードへの引継ぎ1件を基準作業と対比較してPILOT。修正回数、古い文脈、納品品質、MCP摩擦、書出し可能性、ハーネス間再利用を測る。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload has yet measured this candidate against its promised outcome, operational boundary, and failure modes. / この候補はStangyodeのワークロードで、期待成果、運用境界、障害モードに対してまだ測定していない。
- Trade-offs / トレードオフ:
  - Collaborative Markdown can keep intent, designs, diagrams, and code references in one live handoff surface writable through MCP. / 共同Markdownに意図、デザイン、図、コード参照を一つの生きた引継ぎ面としてまとめ、MCPから読み書きできる。
  - Open-beta access and Figma-native state create plan, permission, lock-in, and export risks; no public benchmark demonstrates better task outcomes. / オープンベータ利用条件とFigma固有状態はプラン、権限、ロックイン、書出しの危険を生み、課題成果改善を示す公開評価もない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-16
- History / 履歴:
  - 2026-10-16: Added at PILOT with a bounded recommendation; evidence is concrete but not independent proof of local reliability or fit. / PILOTへ限定的推奨付きで追加。証拠は具体的だが、ローカル信頼性や適合性の独立証明ではない。

### LSCBench / LSCBench
- Adoption stage / 導入段階: PILOT (50/100)
- Scores / スコア: frontier 90, fit 92, confidence 86
- Recommendation / 推奨: PILOT only as an isolated coding-agent security regression gate beside SAST, DAST, and human review; pin tasks, images, hidden-test access, model, budget, and contamination assumptions. / SAST、DAST、人手レビューと併用する隔離コーディングエージェント安全回帰ゲートとしてのみPILOT。課題、イメージ、非公開試験アクセス、モデル、予算、汚染前提を固定する。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload has yet measured this candidate against its promised outcome, operational boundary, and failure modes. / この候補はStangyodeのワークロードで、期待成果、運用境界、障害モードに対してまだ測定していない。
- Trade-offs / トレードオフ:
  - Separate hidden functional and security tests make insecure success visible and package the result in replayable isolated environments. / 非公開の機能試験と安全試験を分離し、安全でない成功を可視化して隔離環境で再生可能にする。
  - Public vulnerability families, selected attack coverage, author-run scores, and uncertain correlation with production defects prevent certification-style use. / 公開脆弱性群、選択された攻撃範囲、作者実施スコア、本番欠陥との不明な相関により、認証のようには使えない。
- Provenance / 来歴: discovery; partially-verified; 2026-10-16
- History / 履歴:
  - 2026-10-16: Added at PILOT with a bounded recommendation; evidence is concrete but not independent proof of local reliability or fit. / PILOTへ限定的推奨付きで追加。証拠は具体的だが、ローカル信頼性や適合性の独立証明ではない。

### In-the-wild agent boundary failures / 実環境エージェント境界障害
- Adoption stage / 導入段階: WATCH (48/100)
- Scores / スコア: frontier 92, fit 94, confidence 86
- Recommendation / 推奨: WATCH the incident class and PILOT deny-by-default egress, scoped short-lived credentials, relay detection, evaluator isolation, immutable external telemetry, and an independent kill switch before broader autonomy. / インシデント類型をWATCHし、自律範囲拡大前に既定拒否の外向き通信、短命で範囲付き資格情報、中継検知、評価隔離、改変不能な外部遠隔測定、独立停止装置をPILOTする。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload has yet measured this candidate against its promised outcome, operational boundary, and failure modes. / この候補はStangyodeのワークロードで、期待成果、運用境界、障害モードに対してまだ測定していない。
- Trade-offs / トレードオフ:
  - Two independent incident records turn abstract threat models into concrete acceptance cases for network, credential, evaluation, and shutdown controls. / 独立した2件のインシデント記録が、抽象脅威モデルをネットワーク、資格情報、評価、停止制御の具体的受入ケースへ変える。
  - Attribution, severity, and contamination differ: Tencent-hosted egress is not proof of Tencent operation, and investigator-inserted text complicates causal interpretation. / 帰属、深刻度、汚染は異なる。Tencentホスト通信はTencent運用の証明ではなく、調査者挿入文が因果解釈を複雑にする。
- Provenance / 来歴: discovery; partially-verified; 2026-10-16
- History / 履歴:
  - 2026-10-16: Added at WATCH with a bounded recommendation; evidence is concrete but not independent proof of local reliability or fit. / WATCHへ限定的推奨付きで追加。証拠は具体的だが、ローカル信頼性や適合性の独立証明ではない。

## GitHub discovery input / GitHub発見入力

Public observation input only. Living candidates live in discovery-candidates.json. Absence of a repository is not a negative finding. Queries may be phenomenon-based and need not match Core Atlas terms. / 公開観測の入力のみ。生きた候補は discovery-candidates.json にある。リポジトリがないことは否定的発見ではない。クエリは現象ベースでよく、コア・アトラス用語と一致する必要はない。

Provider / プロバイダー: github; mode / モード: public-api; live fetch / ライブ取得: yes

- typed-decision-models: typed probabilistic decision model System One (collected)
- agent-skills: topic:agent-skills (collected)
- mcp-apps: topic:mcp-apps (collected)
- a2a: topic:agent-to-agent (collected)
- agentic-resource-discovery-ard: topic:agentic-resource-discovery (collected)
- ponytail: ponytail (collected)
- caveman: caveman (collected)

Collected signals / 収集済みシグナル: 35

Generated by atlas/scripts/render-frontier-briefing.mjs; deterministic for the checked-in inputs.
