# AI Frontier Radar and Adoption Intelligence / AIフロンティア・レーダーと導入インテリジェンス

Snapshot / スナップショット: 2026-10-11

A bounded evidence inventory for deciding what to watch, test, or defer. / 何を観測し、試し、保留するかを決めるための、範囲を限定した証拠インベントリ。

> Seed items remain seed-era judgments until re-verified. New Radar items must keep provenance, history, and evidence state visible. Sensors are not proof. / シード項目は再検証までシード判断のまま。新規レーダー項目は来歴、履歴、証拠状態を明示する。センサーは証明ではない。

## Radar health / レーダー健全性

As of / 基準時刻: 2026-10-11T06:13:26Z; cadence / 頻度: daily; data / データ: CURRENT; stale after / 期限: 48h

### Pipeline runs / パイプライン実行
- scout: SUCCESS; last success 2026-10-11T05:08:42Z; failure streak 0; last failure rate_limit at 2026-10-08T13:31:55Z (resolved)
- editor: SUCCESS; last success 2026-10-11T06:13:26Z; failure streak 0

### Sensors / センサー
- primary-docs: CHECKED
- independent-press: CHECKED
- github-public: CHECKED
- preprint: CHECKED

### First-party sources checked / 確認済み一次情報
- [TypeSafe current models](https://docs.typesafe.ai/models): no-material-change; checked 2026-10-11; source typesafe-models
- [Microsoft-Decision-1 in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/use-foundry-models-microsoft-decision): relevant; checked 2026-10-11; source microsoft-decision-1
- [Mapika decider model family](https://github.com/Mapika/decider): relevant; checked 2026-10-11; source mapika-decider
- [Alibaba/OpenAnolis SkillFS](https://www.alibabacloud.com/blog/skillfs-governing-dozens-of-agent-skills-with-a-file-system_603623): relevant; checked 2026-10-11; source skillfs
- [Cloudflare Skills over MCP](https://developers.cloudflare.com/changelog/post/2026-10-10-cloudflare-mcp-skills/): relevant; checked 2026-10-11; source cloudflare-skills-mcp
- [SWE-Skills-Bench](https://arxiv.org/html/2603.15401): relevant; checked 2026-10-11; source swe-skills-bench
- [When Old Facts Return](https://arxiv.org/abs/2610.07715): relevant; checked 2026-10-11; source memory-rereads-paper
- [Stale, Misattributed, or Late](https://arxiv.org/abs/2610.10265): relevant; checked 2026-10-11; source personal-memory-validity-paper
- [Mem0 Dream supersession and active-memory reads](https://docs.mem0.ai/platform/features/dream): relevant; checked 2026-10-11; source mem0-dream
- [Zep temporal facts and validity bounds](https://help.getzep.com/facts): relevant; checked 2026-10-11; source zep-temporal-facts
- [OpenAI API changelog](https://developers.openai.com/api/docs/changelog): no-material-change; checked 2026-10-11; source openai-changelog
- [Anthropic API release notes](https://docs.anthropic.com/en/release-notes/api): relevant; checked 2026-10-11; source anthropic-api-release-notes
- [Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog): no-material-change; checked 2026-10-11; source gemini-api-changelog
- [AWS What’s New](https://aws.amazon.com/about-aws/whats-new/): relevant; checked 2026-10-11; source aws-whats-new
- [Hugging Face blog](https://huggingface.co/blog): relevant; checked 2026-10-11; source huggingface-blog
- [Vercel skills 1.7.2 release](https://github.com/vercel-labs/skills/releases/tag/v1.7.2): no-material-change; checked 2026-10-11; source vercel-skills-1-7-2
- [Microsoft Azure announcements](https://azure.microsoft.com/en-us/blog/content-type/announcements/): no-material-change; checked 2026-10-11; source azure-announcements
- [Meta AI news](https://about.fb.com/news/tag/ai): no-material-change; checked 2026-10-11; source meta-ai-news
- [Mistral Large 4 announcement](https://mistral.ai/news/mistral-large-4/): no-material-change; checked 2026-10-11; source mistral-large-4
- [Google Cloud Gemini agent announcement](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026): no-material-change; checked 2026-10-11; source google-gemini-agent
- [MCP protocol releases](https://github.com/modelcontextprotocol/modelcontextprotocol/releases): no-material-change; checked 2026-10-11; source mcp-protocol-releases
- [MCP Python SDK releases](https://github.com/modelcontextprotocol/python-sdk/releases): no-material-change; checked 2026-10-11; source mcp-python-releases
- [MCP TypeScript SDK releases](https://github.com/modelcontextprotocol/typescript-sdk/releases): no-material-change; checked 2026-10-11; source mcp-typescript-releases
- [mcp-use 2.8.2 release](https://github.com/mcp-use/mcp-use/releases/tag/mcp-use%402.8.2): no-material-change; checked 2026-10-11; source mcp-use-2-8-2
- [Ponytail benchmark completeness hardening](https://github.com/DietrichGebert/ponytail/commit/88cedebb3c1f8d024ef361e13232bdf98c071481): no-material-change; checked 2026-10-11; source ponytail-benchmark-hardening
- [Caveman 3.2.0 release](https://github.com/JuliusBrussee/caveman/releases/tag/v3.2.0): no-material-change; checked 2026-10-11; source caveman-3-2-0
- [Knowledge Triage reference implementation](https://github.com/searchsim-org/cikm26-knowledge-triage): no-material-change; checked 2026-10-11; source knowledge-triage-repo
- [Atomix releases](https://github.com/mpi-dsg/atomix/releases): no-material-change; checked 2026-10-11; source atomix-releases

### Queries run / 実行クエリ
### Named entities and sibling implementations / 名前付きエンティティと同等実装
Microsoft-Decision-1 and Mapika decider broaden direct substitutes for Jev; other tracked named implementations had no verified material release after October 10. / Microsoft-Decision-1とMapika deciderがJevの直接代替を拡大。他の追跡中の名前付き実装には10月10日以降の重要リリースを確認しなかった。

Targets: jev, typed-probabilistic-decision-models, agent-skills, vercel-skills, mcp-apps, mcp-use, ponytail, caveman, gemini-agent

Evidence: typesafe-models, microsoft-decision-1, mapika-decider, vercel-skills-1-7-2, mcp-use-2-8-2, ponytail-benchmark-hardening, caveman-3-2-0

- `exact-name release, alternatives, competitors, adoption, benchmark, and criticism searches for Jev, Agent Skills, Vercel skills, MCP Apps, mcp-use, Ponytail, Caveman, Gemini agent, Knowledge Triage, Atomix, AgentSpy, and SWE-Game`
- `Jev alternatives competitors`
- `decision API/model`
- `typed answers`
- `predicate choice score`
- `classification routing probabilities`
- `bounded finite-answer decisions`
- `major-vendor equivalent`

### First-party release sweep / 一次情報リリース確認
The rolling first-party sweep found material Microsoft Decision, SkillFS, Cloudflare Skills-over-MCP, Anthropic workflow, AWS vector-filtering, and open decision-model movement; other named items retained prior judgments. / 一次情報のローリング確認でMicrosoft Decision、SkillFS、Cloudflare Skills-over-MCP、Anthropicワークフロー、AWSベクトル絞り込み、公開判断モデルの重要な動きを確認。他の名前付き項目は従来判断を維持した。

Targets: jev, typed-probabilistic-decision-models, agent-skills, vercel-skills, mcp-apps, mcp-use, ponytail, caveman, gemini-agent

Evidence: typesafe-models, microsoft-decision-1, mapika-decider, skillfs, cloudflare-skills-mcp, mem0-dream, zep-temporal-facts, openai-changelog, anthropic-api-release-notes, gemini-api-changelog, aws-whats-new, huggingface-blog, vercel-skills-1-7-2, azure-announcements, meta-ai-news, mistral-large-4, google-gemini-agent, mcp-protocol-releases, mcp-python-releases, mcp-typescript-releases, mcp-use-2-8-2, ponytail-benchmark-hardening, caveman-3-2-0, knowledge-triage-repo, atomix-releases

- `site- and date-restricted October 5–11 checks across OpenAI, Anthropic, Google, Microsoft, AWS, Cloudflare, Meta, Mistral, Hugging Face, TypeSafe, Vercel, and MCP`
- `site-restricted release checks for tracked named entities and their vendors`

### Open phenomenon discovery / 現象ベースのオープン探索
Open discovery strengthened skill governance while adding task-level counterevidence, and established a research-stage memory-validity category with independent supersession and temporal-fact implementations. / オープン探索はスキル統治を強化しつつタスク単位の反証を追加し、独立した置換・時間的事実実装に基づく研究段階のメモリ有効性カテゴリを成立させた。

Targets: agent-skills, pre-generation-memory-validity

Evidence: skillfs, cloudflare-skills-mcp, swe-skills-bench, memory-rereads-paper, personal-memory-validity-paper, mem0-dream, zep-temporal-facts

- `stale misattributed long-context memory`
- `pre-generation memory validity`
- `active fact supersession retrieval`
- `agent skill governance`
- `skills over MCP`
- `skill task-success benchmark`
- `delegated authorization receipts`
- `receiver-signed action receipts`

### Tracked named entities / 追跡中の名前付きエンティティ
- jev, agent-skills, mcp-apps, mcp-use, vercel-skills, ponytail, caveman, gemini-agent

### Changelog entries checked / 確認済み変更履歴
- radar-loop-1, radar-loop-2, radar-loop-3, radar-health-1, radar-daily-2026-10-09, radar-daily-2026-10-10, radar-daily-2026-10-11

### Explicitly stale sources / 明示的に古い情報源
- a2a-spec; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。
- ard-spec; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。
- anthropic-context; last checked 2026-09-24: This seed-era source has not been re-verified into the Radar record. / このシード時点の情報源はレーダー記録へ再検証されていない。

### Findings and decisions / 発見と判断
- material-finding; jev, typed-probabilistic-decision-models: Jev remains text-only on 1.13 with no new capability release while Microsoft-Decision-1 and Mapika decider add direct hosted and open substitutes; lower Jev-specific differentiation while strengthening category adoption paths. / Jevは新機能リリースがなく1.13・テキスト専用のまま、Microsoft-Decision-1とMapika deciderがホスト型・公開の直接代替を追加。Jev固有の差別化を下げ、カテゴリの導入経路を強化する。; evidence: typesafe-models, microsoft-decision-1, mapika-decider
- material-finding; agent-skills: SkillFS and Cloudflare Skills-over-MCP add independent governance and remote-distribution paths, while preliminary paired evaluation reports that most tested skills were neutral and some harmful; keep Agent Skills at WATCH with stricter task-level gates. / SkillFSとCloudflare Skills-over-MCPが独立した統治・遠隔配布経路を追加する一方、予備的対比較評価では多くのスキルが中立で一部は有害。Agent Skillsを厳格なタスク単位ゲート付きWATCHに維持する。; evidence: skillfs, cloudflare-skills-mcp, swe-skills-bench
- material-finding; pre-generation-memory-validity: Two independent studies expose stale and misattributed memory before generation, while Mem0 and Zep provide independently operated supersession and temporal-validity paths; add the category at WATCH without claiming general production validation. / 独立した2研究が生成前の古い情報・誤帰属メモリを示し、Mem0とZepが独立運営の置換・時間的有効性経路を提供。一般的な本番検証を主張せずカテゴリをWATCHへ追加する。; evidence: memory-rereads-paper, personal-memory-validity-paper, mem0-dream, zep-temporal-facts
- editorial-decision; jev, typed-probabilistic-decision-models, agent-skills, pre-generation-memory-validity: Keep all four at WATCH, defer a combined authorization-and-action-receipts category because its pre-action and post-action mechanisms do not yet satisfy the same-value implementation threshold, and promote nothing to PILOT or the Core Atlas. / 4項目をWATCHに維持。事前認可と事後証明の機構が同一価値の実装閾値をまだ満たさないため認可・行為レシート統合カテゴリは保留し、PILOTやコア・アトラスへは昇格しない。; evidence: microsoft-decision-1, skillfs, swe-skills-bench, memory-rereads-paper, personal-memory-validity-paper

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
