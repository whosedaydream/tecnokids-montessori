<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Educational content lives in `src/data/*` keyed by curriculum level (`Leveled<T>`: 6, 7, 8, 9-10, 11-12; group derives from level); components only render it — keeps content editable without touching logic.
- All quizzes/activities use `QuizEngine`, all memory games use `MemoryGame`; new games of the same type must reuse these engines with new data.
- Age, sound and progress state live in `src/lib/app-state.tsx` and persist only in localStorage — no auth, accounts or database by spec.
