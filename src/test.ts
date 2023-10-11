import { FlagEmbedding } from "./fastembed";

async function  main() {
    const model = await FlagEmbedding.init();
    const embedding = await model.queryEmbed("hello world");
    console.log(embedding)
};

main();