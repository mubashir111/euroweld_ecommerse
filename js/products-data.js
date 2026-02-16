var productsData = {
    // Hoists
    "manual-chain-hoist": {
        name: "Manual Chain Hoist",
        category: "Hoists",
        description: "Heavy duty lifting. Durable manual chain hoist for heavy lifting operations.",
        images: ["images/products/manual-chain-hoist.png"],
        specs: { "Capacity": "0.5t - 20t", "Standard": "EPC" }
    },
    "manual-lever-hoist": {
        name: "Manual Lever Hoist",
        category: "Hoists",
        description: "Versatile lifting tool. Portable lever hoist for versatile applications.",
        images: ["images/products/manual-lever-hoist.png"],
        specs: { "Capacity": "0.75t - 9t", "Lift Height": "1.5m" }
    },
    "electrical-chain-hoist": {
        name: "Electrical Chain Hoist",
        category: "Hoists",
        description: "High-performance electric chain hoist for industrial use.",
        images: ["images/products/electrical-chain-hoist.png"],
        specs: { "Capacity": "0.5t - 5t", "Power": "3-Phase" }
    },
    "electrical-wire-rope-hoist": {
        name: "Electrical Wire Rope Hoist",
        category: "Hoists",
        description: "Robust wire rope hoist for heavy industrial lifting.",
        images: ["images/products/electrical-wire-rope-hoist.png"],
        specs: { "Capacity": "1t - 20t", "Speed": "Single/Dual" }
    },
    "mini-electrical-wire-rope-hoist": {
        name: "Mini Electrical Wire Rope Hoist",
        category: "Hoists",
        description: "Compact electric hoist for light duty lifting.",
        images: ["images/products/mini-electrical-wire-rope-hoist.png"],
        specs: { "Capacity": "100kg - 1000kg", "Voltage": "220V" }
    },

    // Trolleys
    "manual-push-trolley": {
        name: "Manual Push Trolley",
        category: "Trolleys",
        description: "Plain trolley for manual movement of loads on beams.",
        images: ["images/products/manual-push-trolley.png"],
        specs: { "Capacity": "0.5t - 10t", "Beam Width": "Adjustable" }
    },
    "manual-gear-trolley": {
        name: "Manual Gear Trolley",
        category: "Trolleys",
        description: "Geared trolley for precise positioning of heavy loads.",
        images: ["images/products/manual-gear-trolley.png"],
        specs: { "Capacity": "0.5t - 20t", "Chain Length": "3m" }
    },
    "cargo-trolley": {
        name: "Cargo Trolley",
        category: "Trolleys",
        description: "Heavy duty skates for moving machinery and heavy equipment.",
        images: ["images/products/cargo-trolley.png"],
        specs: { "Capacity": "6t - 18t", "Type": "Skates" }
    },

    // Winches
    "wire-rope-winch": {
        name: "Wire Rope Winch",
        category: "Winches",
        description: "Manual wire rope winch (tirfor) for pulling and lifting.",
        images: ["images/products/wire-rope-winch.png"],
        specs: { "Capacity": "800kg - 5400kg", "Rope Length": "20m" }
    },
    "hand-winch": {
        name: "Hand Winch",
        category: "Winches",
        description: "Manual brake hand winch for light lifting and pulling.",
        images: ["images/products/hand-winch.png"],
        specs: { "Capacity": "1200lbs - 2600lbs", "Material": "Steel/SS" }
    },
    "hand-puller": {
        name: "Hand Puller",
        category: "Winches",
        description: "Cable puller for tensioning and pulling loads.",
        images: ["images/products/hand-puller.png"],
        specs: { "Capacity": "2t - 4t", "Hooks": "2/3" }
    },

    // Lifting Slings
    "webbing-sling": {
        name: "Webbing Sling",
        category: "Lifting Slings",
        description: "Polyester flat webbing sling.",
        images: ["images/products/webbing-sling.png"],
        specs: { "Safety Factor": "7:1", "Standard": "EN1492-1" }
    },
    "round-sling": {
        name: "Round Sling",
        category: "Lifting Slings",
        description: "Polyester round sling (endless).",
        images: ["images/products/round-sling.png"],
        specs: { "Safety Factor": "7:1", "Standard": "EN1492-2" }
    },
    "wire-rope-sling": {
        name: "Wire Rope Sling",
        category: "Lifting Slings",
        description: "Pressed wire rope sling with soft eyes.",
        images: ["images/products/wire-rope-sling.png"],
        specs: { "Construction": "6x36", "Ferrule": "Aluminum" }
    },
    "chain-sling": {
        name: "Chain Sling",
        category: "Lifting Slings",
        description: "Grade 80 chain sling assembly.",
        images: ["images/products/chain-sling.png"],
        specs: { "Components": "Master Link, Hook", "Grade": "80" }
    },

    // Clamps & Magnets
    "vertical-lifting-clamp": {
        name: "Vertical Lifting Clamp",
        category: "Clamps",
        description: "Clamp for vertical lifting of steel plates.",
        images: ["images/products/vertical-lifting-clamp.png"],
        specs: { "Capacity": "1t - 10t", "Jaw Opening": "0-100mm" }
    },
    "horizontal-lifting-clamp": {
        name: "Horizontal Lifting Clamp",
        category: "Clamps",
        description: "Clamp for horizontal transport of non-deflecting plates.",
        images: ["images/products/horizontal-lifting-clamp.png"],
        specs: { "Capacity": "1.5t - 5t", "Sold As": "Pair" }
    },
    "permanent-magnetic-lifter": {
        name: "Permanent Magnetic Lifter",
        category: "Clamps",
        description: "Magnetic lifter for steel plates and rounds.",
        images: ["images/products/permanent-magnetic-lifter.png"],
        specs: { "Capacity": "100kg - 6000kg", "Safety": "3.5:1" }
    },

    // Material Handling
    "pallet-truck": {
        name: "Pallet Truck",
        category: "Material Handling",
        description: "Hand pallet truck for warehouse use.",
        images: ["images/products/pallet-truck.png"],
        specs: { "Capacity": "2.5t - 3t", "Wheels": "PU/Nylon" }
    },
    "manual-stacker": {
        name: "Manual Stacker",
        category: "Material Handling",
        description: "Manual hydraulic stacker.",
        images: ["images/manual-stacker-hq.png"],
        specs: { "Capacity": "1t - 2t", "Height": "1.6m" }
    },
    "drum-lifter": {
        name: "Drum Lifter",
        category: "Material Handling",
        description: "Vertical drum lifter.",
        images: ["images/products/drum-lifter.png"],
        specs: { "Capacity": "500kg", "Type": "Chain/Clamp" }
    },
    "crane-scale": {
        name: "Crane Scale",
        category: "Material Handling",
        description: "Electronic crane scale.",
        images: ["images/products/crane-scale.png"],
        specs: { "Capacity": "1t - 50t", "Display": "Digital" }
    },
    "jack": {
        name: "Jack",
        category: "Material Handling",
        description: "Mechanical rack jack (railway jack).",
        images: ["images/products/jack.png"],
        specs: { "Capacity": "3t - 20t", "Type": "Mechanical" }
    },
    "spring-balancer": {
        name: "Spring Balancer",
        category: "Material Handling",
        description: "Tool balancer for weightless suspension.",
        images: ["images/products/spring-balancer.png"],
        specs: { "Capacity": "0.5kg - 200kg", "Cable": "Steel" }
    },
    "snatch-block": {
        name: "Snatch Block",
        category: "Material Handling",
        description: "Snatch block with hook/shackle.",
        images: ["images/products/snatch-block.png"],
        specs: { "Capacity": "2t - 50t", "Sheave": "Single" }
    },
    "heavy-duty-snatch-block": {
        name: "Heavy Duty Snatch Block",
        category: "Material Handling",
        description: "Heavy duty snatch block for rigging.",
        images: ["images/products/heavy-duty-snatch-block.png"],
        specs: { "Capacity": "8t - 100t", "Type": "Heavy Duty" }
    },

    // Accessories
    "chain": {
        name: "Load Chain",
        category: "Accessories",
        description: "Grade 80 / Grade 100 Load Chain.",
        images: ["images/products/chain.png"],
        specs: { "Grade": "80/100", "Finish": "Black/Galv" }
    },
    "wire-rope": {
        name: "Wire Rope",
        category: "Accessories",
        description: "Steel wire rope for lifting and general purpose.",
        images: ["images/products/wire-rope.png"],
        specs: { "Construction": "Various", "Finish": "Galv/Ungalv" }
    },
    "ratchet-strap": {
        name: "Ratchet Strap",
        category: "Accessories",
        description: "Cargo lashing belt.",
        images: ["images/products/ratchet-strap.png"],
        specs: { "Width": "25mm - 75mm", "LC": "800kg - 10000kg" }
    },
    "push-button-switch": {
        name: "Push Button Switch",
        category: "Accessories",
        description: "Pendant control station for hoists.",
        images: ["images/products/push-button-switch.png"],
        specs: { "Buttons": "2/4/6 + Stop", "IP Rating": "IP65" }
    }
};
