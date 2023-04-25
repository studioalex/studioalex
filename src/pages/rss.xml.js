import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
    const tips = await getCollection('tips');
    return rss({
        title: 'StudiAlex RSS Feed',
        description: 'RSS Feed for StudiAlex',
        site: context.site,
        items: tips.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}