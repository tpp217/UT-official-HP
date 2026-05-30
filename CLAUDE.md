# UT OFFICIAL HP（UT-official-HP）

uniquetrash.inc の **公開コーポレートサイト**。社内ツール群（operation-hub 配下）とは性質が異なる対外向け資産。

## 技術スタック

- Next.js 16（App Router）+ React 19
- **JSX**（TypeScript ではなく、`jsconfig.json` 構成）
- Vercel ホスティング

## ディレクトリ

```
UT-official-HP/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   ├── api/                 # 問い合わせフォーム等
│   ├── components/
│   └── privacy/             # プライバシーポリシー
├── design-canvas.jsx        # デザイン検討用キャンバス
├── hero-craft.jsx           # Hero セクション案
├── hero-explorations.html   #   〃
├── hero-playful.jsx         #   〃
├── hero-pop.jsx             #   〃
├── public/
├── next.config.mjs
└── package.json
```

## 注意事項

- **対外向けサイト**: トーン・デザインは社内ツール（業務密度優先）と別文脈。**過剰な装飾を避ける** という基本方針は同じだが、ブランディング目的の表現は許容
- **複数の hero 案ファイル（`hero-*.jsx` / `hero-explorations.html`）**: デザイン検討の残骸。本番には適用されていない可能性あり。削除時は採用バージョンを確認
- **`design-canvas.jsx`**: デザイン検討用。本番にマウントされている前提では触らない
- **TypeScript ではなく JSX**: 他プロジェクトと違うので import / 型定義の感覚が異なる
- **問い合わせフォーム / プライバシーポリシー**: 法務文書のため変更時は確認必須

## デプロイ

- 本番: uniquetrash.inc 公開ドメイン（Vercel）
- main マージで Vercel 自動デプロイ

Git / Vercel 運用はグローバル `~/.claude/CLAUDE.md` に準拠。

## TODO

- 未採用の hero 候補ファイル整理（採用案を確定 → 他は削除 or `_drafts/` へ）
