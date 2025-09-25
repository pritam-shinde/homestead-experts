const metaDetails = {
    home: {
        title: "Homestead Experts - Medical Expert Witness Services",
        description:
            "Homestead Experts provides trusted medical expert witness services, connecting legal teams with certified specialists across all medical fields.",
        canonical: "https://homesteadexperts.com/",
    },
    about: {
        title: "Know About Us - Legal Expertise - Homestead Experts",
        description:
            "Homestead Experts connects legal teams with trusted, board-certified medical professionals for expert opinions, case reviews, and testimony.",
        canonical: "https://homesteadexperts.com/about/",
    },
    contact: {
        title: "Contact Us for Legal Help - Homestead Experts",
        description:
            "Do you have issues or require professional assistance with your case? For reliable medical witness services get in touch with Homestead Experts.",
        canonical: "https://homesteadexperts.com/contact/",
    },
    "not-found": {
        title: "Page Not Found | Homestead Experts",
        description:
            "Oops! The page you're looking for doesn't exist. Return to Homestead Experts's homepage or explore our services",
        canonical: "https://homesteadexperts.com/404/",
    },
};

export function handlerMetaDetails(key) {
    const data = metaDetails[key];

    if (!data) {
        return {
            title: "Homestead Experts",
            description: "Default meta description",
            alternates: { canonical: "https://homesteadexperts.com/" },
            robots: "index, follow",
            openGraph: {
                title: "Homestead Experts",
                description: "Default Open Graph description",
                type: "website",
                url: "https://homesteadexperts.com/",
            },
            twitter: {
                title:  "Homestead Experts",
                description: "Default Twitter description",
                card: "summary_large_image",
            },
        };
    }

    return {
        title: data.title,
        description: data.description,
        alternates: {
            canonical: data.canonical,
        },
        robots: data.robots || "index, follow",
        openGraph: {
            title: data.og_title || data.title,
            description: data.og_description || data.description,
            type: data.og_type || "website",
            url: data.og_url || data.canonical,
            ...(data.og_image ? { images: [data.og_image] } : {}),
        },
        twitter: {
            title: data.twitter_title || data.title,
            description: data.twitter_description || data.description,
            card: data.twitter_card || "summary_large_image",
            ...(data.twitter_site ? { site: data.twitter_site } : {}),
        },
    };
}