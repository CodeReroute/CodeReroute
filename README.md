## Code Reroute

DEMO: https://temurih.github.io/code-reroute/

### `useTranslate`

Every text on that renders must be translated.

```
const t = useTranslate();
const text = t('something.anotherThing.onceMore.lastTime.word', {
    somethingHere: 'Nice!',
    anotherThing: 'Nice there!',
    anotherThings: 'No Nice here!',
});
```
