console.log(`index.js loaded ${Date()}`);

(async function(){
    grok = await import('./grok.mjs')
})();