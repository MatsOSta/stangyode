# AI Frontier Radar and Adoption Intelligence / AIフロンティア・レーダーと導入インテリジェンス

Snapshot / スナップショット: 2026-09-24

A bounded manual-run inventory for deciding what to watch, test, or defer. / 何を観測し、試し、保留するかを決めるための、範囲を限定した手動実行用インベントリ。

> Seed judgments are not current external evidence. Unknown compatibility stays explicit until a manual run records a check. / シード判断は現在の外部証拠ではない。手動実行で確認を記録するまで、互換性の不明点を明示する。

## Signals / シグナル

### Agent Skills / Agent Skills
- Adoption stage / 導入段階: WATCH (48/100)
- Scores / スコア: frontier 78, fit 72, confidence 42
- Recommendation / 推奨: Watch and prototype as a versioned capability boundary; do not install a package from discovery by default. / バージョン管理された能力境界として観測・試作する。発見したパッケージを標準でインストールしない。
- Compatibility / 互換性: UNKNOWN — Host, permission, and instruction-loading compatibility has not been checked in this seed snapshot. / このシード・スナップショットでは、ホスト、権限、指示読み込みの互換性を確認していない。
- Trade-offs / トレードオフ:
  - Portable instructions can improve reuse, but hidden dependencies can weaken reviewability. / 移植可能な指示は再利用性を高めるが、隠れた依存関係はレビュー可能性を下げる。
  - Progressive disclosure reduces context load, but adds packaging and lifecycle work. / 段階的開示はコンテキスト負荷を減らすが、パッケージ化とライフサイクル作業が増える。
- Provenance / 来歴: seed; unverified; 2026-09-24
- History / 履歴:
  - 2026-09-24: Seeded for watch-list review. / ウォッチリスト確認用にシード。

### MCP Apps / MCP Apps
- Adoption stage / 導入段階: WATCH (44/100)
- Scores / スコア: frontier 76, fit 63, confidence 58
- Recommendation / 推奨: Watch for a narrow UI integration experiment behind an explicit host compatibility check. / 明示的なホスト互換性確認を前提に、限定的なUI統合実験を観測する。
- Compatibility / 互換性: UNKNOWN — The Atlas records the protocol concept, not compatibility with Stangyode's static site or a chosen host. / アトラスが記録するのはプロトコル概念であり、Stangyodeの静的サイトや特定ホストとの互換性ではない。
- Trade-offs / トレードオフ:
  - Tool results can become more usable, but the host becomes part of the product contract. / ツール結果は使いやすくなるが、ホストが製品契約の一部になる。
  - Richer interaction can reduce handoff friction, but increases UI and security surface. / 豊かな操作は引き継ぎ摩擦を減らすが、UIとセキュリティ面を広げる。
- Provenance / 来歴: seed; unverified; 2026-09-24
- History / 履歴:
  - 2026-09-24: Seeded as a protocol watch item. / プロトコルの観測項目としてシード。

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

## GitHub discovery input / GitHub発見入力

This file is an input representation only. A future manual run may add public repository evidence; absence of a repository is intentional and does not establish a negative finding. / このファイルは入力表現のみである。将来の手動実行で公開リポジトリの証拠を追加できる。リポジトリがないことは意図的で、否定的な発見を意味しない。

Provider / プロバイダー: github; mode / モード: manual-input; live fetch / ライブ取得: no

- agent-skills: topic:agent-skills (not-collected)
- mcp-apps: topic:mcp-apps (not-collected)
- a2a: topic:agent-to-agent (not-collected)
- agentic-resource-discovery-ard: topic:agentic-resource-discovery (not-collected)
- ponytail: ponytail (not-collected)
- caveman: caveman (not-collected)

Collected signals / 収集済みシグナル: 0

Generated by atlas/scripts/render-frontier-briefing.mjs; deterministic for the checked-in inputs.
