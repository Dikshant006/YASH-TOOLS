const allProducts = [
    {
        name: "Bar Turning Tools",
        image: "./imges/bar-turning-tool-250x250-1.webp",
        link: "./card/bar-turning-tools.html"
    },
    {
        name: "Boring Tools",
        image: "./imges/Boring-Tools-300x300.webp",
        link: "./card/boring-tools.html"
    },
    {
        name: "Brazed Boring Tools",
        image: "./imges/brazed-tungsten-carbide-turning-tools-250x250-1.webp",
        link: "./card/brazed-boring-tools.html"
    },
    {
        name: "Brazed Carbide Tipped Tools",
        image: "./imges/500-300x300.webp",
        link: "./card/brazed-carbide-tipped-tools.html"
    },
    {
        name: "Brazed Carbide Tools",
        image: "./imges/Carbide-Brazed-Tools-300x300.webp",
        link: "./card/brazed-carbide-tools.html"
    },
    {
        name: "Brazed Tungsten Carbide Turning Tools",
        image: "./imges/brazed-tungsten-carbide-turning-tools-250x250-1.webp",
        link: "./card/brazed-tungsten-carbide-turning-tools.html"
    },
    {
        name: "Brazed Turning Tools",
        image: "./imges/Carbide-Brazed-Turning-Tools-300x300.webp",
        link: "./card/brazed-turning-tools.html"
    },
    {
        name: "Carbide Brazed Turning Tools",
        image: "./imges/Carbide-Brazed-Turning-Tools-300x300 (1).webp",
        link: "./card/carbide-brazed-turning-tools.html"
    },
    {
        name: "Carbide Cutting Tools",
        image: "./imges/external-threading-tools-300x300.webp",
        link: "./card/carbide-cutting-tools.html"
    },
    {
        name: "Chamfering Tools",
        image: "./imges/chamfering-tools-500x500-300x300.webp",
        link: "./card/chamfering-tools.html"
    },
    {
        name: "Cranked Facing Tools",
        image: "./imges/Cranked-Facing-Tools-300x300.webp",
        link: "./card/cranked-facing-tools.html"
    },
    {
        name: "Cranked Knife Tools",
        image: "./imges/cranked-knife-tools-500x500-300x300.webp",
        link: "./card/cranked-knife-tools.html"
    },
    {
        name: "Cranked Knives",
        image: "./imges/cranked-knife-tool-250x250.webp",
        link: "./card/cranked-knives.html"
    },
    {
        name: "Cranked Round Nose Tools",
        image: "./imges/Cranked-Round-Nose-Tools-JS-Tools.webp",
        link: "./card/cranked-round-nose-tools.html"
    },
    {
        name: "Cranked Turning Tool",
        image: "./imges/Cranked-Turning-Tool.webp",
        link: "./card/cranked-turning-tools.html"
    },
    {
        name: "External Threading Tools",
        image: "./imges/external-threading-tools-500x500-300x300.webp",
        link: "./card/external-threading-tools.html"
    },
    {
        name: "Industrial Brazed Tools",
        image: "./imges/Industrial-Brazed-Tools.webp",
        link: "./card/industrial-brazed-tools.html"
    },
    {
        name: "Internal Threading Tools",
        image: "./imges/internal-threading-tools-250x250.webp",
        link: "./card/internal-threading-tools.html"
    },
    {
        name: "Knife Tools",
        image: "./imges/cranked-knife-tools-500x500-300x300.webp",
        link: "./card/kenife-tools.html"
    },
    {
        name: "Lathe Cutting Tools",
        image: "./imges/Lathe-Machine-Cutting-Tools-300x300.webp",
        link: "./card/lathe-cutting-tools.html"
    },
    {
        name: "Parting Tools",
        image: "./imges/parting-tools-250x250.webp",
        link: "./card/parting-tools.html"
    },
    {
        name: "Polly Gru Brazed Tools",
        image: "./imges/Polly-Gru-Brazed-Tools.webp",
        link: "./card/polly-gru-brazed-tools.html"
    },
    {
        name: "Polly GRU Turning Tool",
        image: "./imges/polly-gru-tools-250x250.webp",
        link: "./card/polly-GRU-turning-tools.html"
    },
    {
        name: "Pulley Grooving Tools",
        image: "./imges/pulley-grooving-tools-250x250.webp",
        link: "./card/pulley-grooving-tools.html"
    },
    {
        name: "Recessing Tools",
        image: "./imges/Recessing-Tools-JS-lathetools-1-300x300.webp",
        link: "./card/recessing-tools.html"
    },
    {
        name: "Round Nose Turning Tools",
        image: "./imges/round-nose-turning-tools-250x250.webp",
        link: "./card/round-nose-turning-tools.html"
    },
    {
        name: "Side Face Cutters",
        image: "./imges/side-face-cutters-500x500-300x300.webp",
        link: "./card/side-face-cutters.html"
    },
    {
        name: "Square Shank Boring Tools",
        image: "./imges/square-shank-boring-tool-250x250.webp",
        link: "./card/square-shank-boring.html"
    },
    {
        name: "Straight Finishing Tools",
        image: "./imges/straight-finishing-tools-250x250-1.webp",
        link: "./card/straight-finishing-tools.html"
    },
    {
        name: "Straight Round Nose Tools",
        image: "./imges/Straight-Round-Nose-Tools.webp",
        link: "./card/straight-round-nose-tools.html"
    },
    {
        name: "Straight Round Nose Turning Tools",
        image: "./imges/Straight-Round-Nose-Turning-Tools-300x300.webp",
        link: "./card/strainght-round-nose-turning-tools.html"
    },
    {
        name: "Threading Grooving Tools",
        image: "./imges/threading-grooving-tool-500x500-300x300.webp",
        link: "./card/threading-grooving-tools.html"
    },
    {
        name: "Threading GRU Tools",
        image: "./imges/Threading-GRU-Tools.webp",
        link: "./card/threading-gru-tools.html"
    },
    {
        name: "Tungsten Carbide Tools",
        image: "./imges/Tungsten-Carbide-Tools-300x300.webp",
        link: "./card/tungsten-carbide-tools.html"
    },
    {
        name: "Turning and Boring Tools",
        image: "./imges/Turning-and-Boring-Tools-300x270.webp",
        link: "./card/turning-and-boring-tools.html"
    },
    {
        name: "Turning and Facing Tools",
        image: "./imges/ISO-2-1-300x300.webp",
        link: "./card/turning-and-facing-tools.html"
    },
    {
        name: "Turning Tools",
        image: "./imges/turning-tools-250x250-1.webp",
        link: "./card/turning-tools.html"
    },
    {
        name: "V Face Cutters",
        image: "./imges/v-face-cutters-300x300.webp",
        link: "./card/v-face-cutters.html"
    }
];