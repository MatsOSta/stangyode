# AI Frontier Radar and Adoption Intelligence / AIフロンティア・レーダーと導入インテリジェンス

Snapshot / スナップショット: 2026-10-08

A bounded manual-run inventory for deciding what to watch, test, or defer. / 何を観測し、試し、保留するかを決めるための、範囲を限定した手動実行用インベントリ。

> Seed items remain seed-era judgments until re-verified. New Radar items must keep provenance, history, and evidence state visible. Sensors are not proof. / シード項目は再検証までシード判断のまま。新規レーダー項目は来歴、履歴、証拠状態を明示する。センサーは証明ではない。

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

### System One / typed decision models / システムワン / 型付き判断モデル
- Adoption stage / 導入段階: WATCH (40/100)
- Scores / スコア: frontier 84, fit 76, confidence 68
- Recommendation / 推奨: Watch for cheap routing, gating, abstention, and escalation; benchmark locally against calibrated classifiers and label-probability baselines before a pilot. / 低コストのルーティング、ゲート、棄却、エスカレーション用途として観測する。試行前に較正済み分類器とラベル確率ベースラインでローカル評価する。
- Compatibility / 互換性: UNKNOWN — No Stangyode workload has been run against a hosted or open implementation. Compatibility stays unknown. / Stangyodeの仕事をホスト型または公開実装に対して実行していない。互換性は不明のまま。
- Trade-offs / トレードオフ:
  - Typed answers let software branch without parsing prose, but the hosted model is a new vendor and runtime dependency. / 型付き回答は文章解析なしに分岐できるが、ホストモデルは新たなベンダーと実行時依存になる。
  - Calibrated confidence is useful for act-or-escalate gates, but calibration claims need independent checks. / 較正された確信度は実行かエスカレーションかの門に使えるが、較正の主張は独立検証が必要。
  - Attention is real (docs, press, reproductions). Attention is not proof the model is accurate in our workloads. / 注目は実在する（資料、報道、再現）。注目は、我々の仕事で正確であることの証明ではない。
- Provenance / 来歴: verification; partially-verified; 2026-10-08
- History / 履歴:
  - 2026-10-08: Discovered without a Jev-named query. Assessed as Radar-only. Implementation: Jev. Concept: System One / typed decisions. / Jevという名前のクエリなしで発見。レーダーのみとして評価。実装はJev。概念はシステムワン / 型付き判断。
  - 2026-10-08: Added an open implementation and an independent early evidence audit. The interface and latency/cost case strengthened; general accuracy superiority remains unproven. / 公開実装と独立した初期証拠監査を追加。インターフェースと遅延・コスト面は強まったが、一般的な精度優位は未証明。

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
