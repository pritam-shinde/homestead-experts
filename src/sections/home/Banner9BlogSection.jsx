"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import HammerIcon from "../icons/HammerIcon";

function truncateText(text, maxLength) {
    const div = document.createElement("div");
    div.innerHTML = text; // Decode HTML entities
    const decoded = div.textContent || div.innerText || "";
    if (decoded.length > maxLength) {
        return decoded.substring(0, maxLength) + "...";
    }
    return decoded;
}


export default function Banner9BlogSection() {
    const [posts, setPosts] = useState([]);

    // Fetch WordPress posts
    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch(
                    "https://staging.homesteadexperts.com/wp-json/wp/v2/posts?_embed&per_page=6"
                );
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error("Failed to fetch posts", error);
            }
        }
        fetchPosts();
    }, []);

    // Init Owl Carousel
    useEffect(() => {
        if (posts.length > 0 && window?.jQuery) {
            const $ = window.jQuery;
            const carousel = $(".procounsel-owl__carousel");
            if (carousel.length && typeof $.fn.owlCarousel === "function") {
                carousel.owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: false,
                    smartSpeed: 700,
                    nav: false,
                    dots: true,
                    autoplay: false,
                    responsive: {
                        0: { items: 1 },
                        768: { items: 2 },
                        992: { items: 3 },
                    },
                });
            }
        }
    }, [posts]);

    return (
        <section className="blog-one" id="blog">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sec-title__tagline d-inline-flex align-items-center gap-2">
                        <div>
                          <HammerIcon/>
                        </div>
                        Article
                    </div>
                    <h3 className="sec-title__title">
                        Latest News & Articles From <br />
                        <span>The Blog Posts</span>
                    </h3>
                </div>

                <div
                    className="blog-one__carousel procounsel-owl__carousel procounsel-owl__carousel--with-shadow procounsel-owl__carousel--basic-nav owl-carousel owl-theme"
                >
                    {posts.map((post) => {
                        const featured = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/images/blog/default.jpg";


                        // const author = post._embedded?.author?.[0]?.name || "Admin";
                        // const authorAvatar = post._embedded?.avatar_urls?.["96"]
                        // console.log(">>>>>", authorAvatar)

                        const authorData = post._embedded?.author?.[0];
                        const author = authorData?.name || "Admin";
                        const authorAvatar = authorData?.avatar_urls?.["96"] || "/assets/images/blog/blog-user-1.jpg";

                        const date = new Date(post.date);
                        const day = date.toLocaleDateString("en-US", { day: "2-digit" });
                        const month = date.toLocaleDateString("en-US", { month: "short" });

                        return (
                            <div key={post.id} className="item">
                                <div className="blog-card wow fadeInUp" data-wow-duration="1500ms">
                                    <div className="blog-card__content">
                                        <div className="blog-card__user">
                                            <Image
                                                // src="/assets/images/blog/blog-user-1.jpg"
                                                src={authorAvatar}
                                                alt={author}
                                                width={40}
                                                height={40}
                                                className="blog-card__user__img"
                                            />
                                            <div className="blog-card__user__info">
                                                <h3 className="blog-card__user__name">{author}</h3>
                                                <p className="blog-card__user__designation">Author</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-card__title">
                                            <a
                                                href="#"
                                                dangerouslySetInnerHTML={{
                                                    __html: truncateText(post.title.rendered, 52)
                                                }}
                                            />
                                        </h3>

                                    </div>

                                    <div className="blog-card__image">
                                        <div className="blog-card__image__inner">
                                            <Image
                                                src={featured}
                                                alt={post.title.rendered}
                                                width={400}
                                                height={270}
                                                style={{objectFit:"cover"}}
                                            />
                                            <Image
                                                src={featured}
                                                alt={post.title.rendered}
                                                width={400}
                                                height={270}
                                                style={{objectFit:"cover"}}
                                            />
                                            <a
                                                // href={`/blog/${post.slug}`}
                                                href="#"
                                                className="blog-card__image__link"
                                            >
                                                <span className="sr-only">{post.title.rendered}</span>
                                            </a>
                                        </div>
                                        <div className="blog-card__date">
                                            <span>{day}</span>
                                            {month}
                                        </div>
                                    </div>

                                    <ul className="list-unstyled blog-card__meta">
                                        <li>
                                            <a
                                                // href={`/blog/${post.slug}`} 
                                                href="#">Read More</a>
                                        </li>
                                        <li>
                                            <i className="icon-bubble-chat-1"></i> 0 Comments
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
