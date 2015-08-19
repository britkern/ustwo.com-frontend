'use strict';

import React from 'react';
import find from 'lodash/collection/find';
import get from 'lodash/object/get';
import filter from 'lodash/collection/filter';

import Hero from '../components/hero';
import BlogPostListItem from '../components/blog-post-list-item';
import BlogControls from '../components/blog-controls';

const pageData = [{
    "id": 8524,
    "date": "2015-08-05T15:24:18",
    "guid": {
        "rendered": "http:\/\/ustwo-staging.aws.hmn.md\/?p=8524"
    },
    "modified": "2015-08-05T15:24:18",
    "modified_gmt": "2015-08-05T15:24:18",
    "slug": "moodnotes",
    "type": "post",
    "category": "Design",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/moodnotes\/",
    "title": {
        "rendered": "Announcing Moodnotes"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>Moodnotes app – a joint venture between ustwo and Thriveport. Capture your mood and improve your thinking habits.</p>"
    },
    "author": 4,
    "featured_image": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/1.gravatar.com\/avatar\/46aa110f444a21f8ae5f8a8cd36b7787?s=24&d=mm&r=g",
                "48": "http:\/\/1.gravatar.com\/avatar\/46aa110f444a21f8ae5f8a8cd36b7787?s=48&d=mm&r=g",
                "96": "http:\/\/1.gravatar.com\/avatar\/46aa110f444a21f8ae5f8a8cd36b7787?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 4,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/matthewedwards\/",
            "name": "matthewedwards",
            "url": "",
            "first_name": "ustwo",
            "last_name": ""
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/moodnotes_feature_image_v3.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Design",
            slug: "design"
          }]
        ]
    }
}, {
    "id": 8386,
    "date": "2015-07-14T07:00:18",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8386"
    },
    "modified": "2015-08-05T11:17:51",
    "modified_gmt": "2015-08-05T11:17:51",
    "slug": "move-fast-make-things-lessons-from-designing-building-for-google-cardboard",
    "type": "post",
    "category": "Process",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/move-fast-make-things-lessons-from-designing-building-for-google-cardboard\/",
    "title": {
        "rendered": "Designing & Building For Google Cardboard"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>A little over a month ago, Cardboard Design Lab launched on the Google Play store. This wasn’t our typical product: a virtual reality app on an emerging platform, meant to teach, demonstrate, and validate VR design principles that are all still very much up for debate.</p>"
    },
    "author": 83,
    "featured_image": 8397,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/1.gravatar.com\/avatar\/af802596f30a94fb76aa1678f8c77114?s=24&d=mm&r=g",
                "48": "http:\/\/1.gravatar.com\/avatar\/af802596f30a94fb76aa1678f8c77114?s=48&d=mm&r=g",
                "96": "http:\/\/1.gravatar.com\/avatar\/af802596f30a94fb76aa1678f8c77114?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 83,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/jon-brennan\/",
            "name": "Jon Brennan",
            "url": "",
            "first_name": "Jon",
            "last_name": "Brennan"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/designing_for_google_cardboard_v2.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Process",
            slug: "process"
          }]
        ]
    }
}, {
    "id": 8360,
    "date": "2015-06-30T15:05:04",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8360"
    },
    "modified": "2015-08-05T16:31:08",
    "modified_gmt": "2015-08-05T16:31:08",
    "slug": "bdd-cross-platform-applications-the-technical-setup",
    "type": "post",
    "category": "Development",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/bdd-cross-platform-applications-the-technical-setup\/",
    "title": {
        "rendered": "BDD Cross-Platform Applications, the Technical Setup"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>We&#8217;ve been working over the last few months on a sample reference project for BDD that we would like to share with the wider community for discussion and feedback.<\/p>\n"
    },
    "author": 18,
    "featured_image": 8373,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/1.gravatar.com\/avatar\/d5a3b89f816b32d2a430abb889fecf57?s=24&d=mm&r=g",
                "48": "http:\/\/1.gravatar.com\/avatar\/d5a3b89f816b32d2a430abb889fecf57?s=48&d=mm&r=g",
                "96": "http:\/\/1.gravatar.com\/avatar\/d5a3b89f816b32d2a430abb889fecf57?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 18,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/juan-ustwo\/",
            "name": "Juan",
            "url": "",
            "first_name": "Juan",
            "last_name": "Delgado"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/BDD_image.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Development",
            slug: "development"
          }]
        ]
    }
}, {
    "id": 8308,
    "date": "2015-06-25T15:20:26",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8308"
    },
    "modified": "2015-08-05T09:41:10",
    "modified_gmt": "2015-08-05T09:41:10",
    "slug": "ustwo-games-ustwogames",
    "type": "post",
    "category": "Design",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/ustwo-games-ustwogames\/",
    "title": {
        "rendered": "ustwo + games = ustwogames"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>The story of how the ustwo games team developed within our studio system.<\/p>\n"
    },
    "author": 82,
    "featured_image": 6126,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/2.gravatar.com\/avatar\/8d3a961a83c76d03ee521d39ddbaf4f9?s=24&d=mm&r=g",
                "48": "http:\/\/2.gravatar.com\/avatar\/8d3a961a83c76d03ee521d39ddbaf4f9?s=48&d=mm&r=g",
                "96": "http:\/\/2.gravatar.com\/avatar\/8d3a961a83c76d03ee521d39ddbaf4f9?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 82,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/neil-ustwo1\/",
            "name": "Neil McFarland",
            "url": "",
            "first_name": "Neil",
            "last_name": "McFarland"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/ustwo_games.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Design",
            slug: "design"
          }]
        ]
    }
}, {
    "id": 8275,
    "date": "2015-06-18T15:11:14",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8275"
    },
    "modified": "2015-08-05T16:27:14",
    "modified_gmt": "2015-08-05T16:27:14",
    "slug": "the-unknown-trip-for-an-occasional-traveller",
    "type": "post",
    "category": "Design",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/the-unknown-trip-for-an-occasional-traveller\/",
    "title": {
        "rendered": "The unknown trip for an occasional traveller"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>We participated in Sk\u00e5netrafiken&#8217;s design challenge to find and design a pleasant travelling experience for the occasional traveller.<\/p>\n"
    },
    "author": 81,
    "featured_image": 8296,
    "comment_status": "closed",
    "ping_status": "open",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/0.gravatar.com\/avatar\/929e557f828c5f32fc30545912eb870c?s=24&d=mm&r=g",
                "48": "http:\/\/0.gravatar.com\/avatar\/929e557f828c5f32fc30545912eb870c?s=48&d=mm&r=g",
                "96": "http:\/\/0.gravatar.com\/avatar\/929e557f828c5f32fc30545912eb870c?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 81,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/johan-ustwo\/",
            "name": "Johan Jonsson",
            "url": "",
            "first_name": "Johan",
            "last_name": "Jonsson"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/occasional_traveler.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Design",
            slug: "design"
          }]
        ]
    }
}, {
    "id": 8204,
    "date": "2015-06-10T13:53:08",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8204"
    },
    "modified": "2015-08-05T09:41:10",
    "modified_gmt": "2015-08-05T09:41:10",
    "slug": "digital-design-still-needs-more-women",
    "type": "post",
    "category": "Culture",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/digital-design-still-needs-more-women\/",
    "title": {
        "rendered": "Digital design still needs more women"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>Digital design still needs more women.<\/p>\n"
    },
    "author": 80,
    "featured_image": 8260,
    "comment_status": "open",
    "ping_status": "closed",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/1.gravatar.com\/avatar\/176e349f348f2e19548bd6bc06a39c6f?s=24&d=mm&r=g",
                "48": "http:\/\/1.gravatar.com\/avatar\/176e349f348f2e19548bd6bc06a39c6f?s=48&d=mm&r=g",
                "96": "http:\/\/1.gravatar.com\/avatar\/176e349f348f2e19548bd6bc06a39c6f?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 80,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/nicki-ustwo\/",
            "name": "Nicki Sprinz",
            "url": "",
            "first_name": "Nicki",
            "last_name": "Sprinz"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/design_needs_more_women_v3.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Culture",
            slug: "culture"
          }]
        ]
    }
}, {
    "id": 8235,
    "date": "2015-05-29T22:41:45",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8235"
    },
    "modified": "2015-08-05T09:41:10",
    "modified_gmt": "2015-08-05T09:41:10",
    "slug": "designing-for-virtual-reality-google-cardboard",
    "type": "post",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/designing-for-virtual-reality-google-cardboard\/",
    "title": {
        "rendered": "Designing For Virtual Reality"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>Virtual reality. It’s an experience that’s been around since the mid­ 80s, but technology always seemed to hold it back. The advances in smartphones and related technologies has finally brought the incredible potential of VR within reach.</p>"
    },
    "author": 9,
    "featured_image": 8242,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/1.gravatar.com\/avatar\/439695298a1ebdddaa9f7d9513a48dd1?s=24&d=mm&r=g",
                "48": "http:\/\/1.gravatar.com\/avatar\/439695298a1ebdddaa9f7d9513a48dd1?s=48&d=mm&r=g",
                "96": "http:\/\/1.gravatar.com\/avatar\/439695298a1ebdddaa9f7d9513a48dd1?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 9,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/casey\/",
            "name": "Casey Hopkins",
            "url": "",
            "first_name": "Casey",
            "last_name": "Hopkins"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/Designing-for-virtual-reality_v2.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Innovation",
            slug: "innovation"
          }]
        ]
    }
}, {
    "id": 8154,
    "date": "2015-05-28T12:36:34",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8154"
    },
    "modified": "2015-08-05T09:41:11",
    "modified_gmt": "2015-08-05T09:41:11",
    "slug": "adidas-go-how-to-make-music-listen-to-you",
    "type": "post",
    "category": "Product",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/adidas-go-how-to-make-music-listen-to-you\/",
    "title": {
        "rendered": "Adidas Go: How to make music listen to you"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>Products which bridge the gap between art and science are the hardest to create which made working with Adidas Go all the more fun, and challenging.<\/p>\n"
    },
    "author": 79,
    "featured_image": 8230,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/1.gravatar.com\/avatar\/a6387cc1cab62b72d3c1252a1fd2c1cd?s=24&d=mm&r=g",
                "48": "http:\/\/1.gravatar.com\/avatar\/a6387cc1cab62b72d3c1252a1fd2c1cd?s=48&d=mm&r=g",
                "96": "http:\/\/1.gravatar.com\/avatar\/a6387cc1cab62b72d3c1252a1fd2c1cd?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 79,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/mans-ustwo\/",
            "name": "M\u00e5ns Adler",
            "url": "",
            "first_name": "M\u00e5ns",
            "last_name": "Adler"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/addidas_image.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Product",
            slug: "product"
          }]
        ]
    }
}, {
    "id": 8162,
    "date": "2015-05-14T18:13:27",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8162"
    },
    "modified": "2015-08-05T09:41:11",
    "modified_gmt": "2015-08-05T09:41:11",
    "slug": "jon-burgerman-ustwo-a-doodles-worth-a-thousand-words",
    "type": "post",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/jon-burgerman-ustwo-a-doodles-worth-a-thousand-words\/",
    "title": {
        "rendered": "Jon Burgerman & ustwo: A Doodle's Worth A Thousand Words"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>Burgerman isn’t just some famous artist we randomly decided to hire; he’s been a studio friend for over a decade, and his doodles cover the walls of every space we’ve ever occupied.</p>"
    },
    "author": 9,
    "featured_image": 8167,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/1.gravatar.com\/avatar\/439695298a1ebdddaa9f7d9513a48dd1?s=24&d=mm&r=g",
                "48": "http:\/\/1.gravatar.com\/avatar\/439695298a1ebdddaa9f7d9513a48dd1?s=48&d=mm&r=g",
                "96": "http:\/\/1.gravatar.com\/avatar\/439695298a1ebdddaa9f7d9513a48dd1?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 9,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/casey\/",
            "name": "Casey Hopkins",
            "url": "",
            "first_name": "Casey",
            "last_name": "Hopkins"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/Jon-Burgerman-Ustwo.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Culture",
            slug: "culture"
          }]
        ]
    }
}, {
    "id": 8095,
    "date": "2015-05-07T12:44:57",
    "guid": {
        "rendered": "http:\/\/ustwo.com\/?post_type=blog&#038;p=8095"
    },
    "modified": "2015-08-05T13:36:31",
    "modified_gmt": "2015-08-05T13:36:31",
    "slug": "ustwo-thinks-culture-create-value",
    "type": "post",
    "category": "Culture",
    "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/ustwo-thinks-culture-create-value\/",
    "title": {
        "rendered": "ustwo Thinks \u2013 Does Culture Create Value?"
    },
    "content": {
        "rendered": ""
    },
    "excerpt": {
        "rendered": "<p>Can our work culture create value, and how might we measure it?<\/p>\n"
    },
    "author": 13,
    "featured_image": 8144,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "format": "standard",
    "_embedded": {
        "author": [{
            "avatar_urls": {
                "24": "http:\/\/1.gravatar.com\/avatar\/45f535a0b9bb437628b6f49a55536234?s=24&d=mm&r=g",
                "48": "http:\/\/1.gravatar.com\/avatar\/45f535a0b9bb437628b6f49a55536234?s=48&d=mm&r=g",
                "96": "http:\/\/1.gravatar.com\/avatar\/45f535a0b9bb437628b6f49a55536234?s=96&d=mm&r=g"
            },
            "description": "",
            "id": 13,
            "link": "http:\/\/ustwo-staging.aws.hmn.md\/blog\/author\/ustwo\/",
            "name": "ustwo",
            "url": "",
            "first_name": "ustwo"
        }],
        "http:\/\/v2.wp-api.org\/attachment": [
            [],
            {
              source_url: "/images/blog/ustwo_thinks.jpg"
            }
        ],
        "http://v2.wp-api.org/term": [
          [{
            name: "Culture",
            slug: "culture"
          }]
        ]
    }
}];

export default class PageBlog extends React.Component {
  render() {
    const props = this.props;
    const posts = props.blogCategory === 'all' ? pageData : filter(pageData, post => {
      const terms = (post._embedded && post._embedded['http://v2.wp-api.org/term']) || [];
      return get(terms, '0.0.slug') === props.blogCategory;
    });
    return (
      <article className="page-blog">

        <Hero title='Think. Share. Learn.' backgroundTint={true} eventLabel='blog'>
          <BlogControls blogCategory={props.blogCategory}/>
        </Hero>

        <section className="blog-post-list">
          {/*get(pageData, '_embedded.ustwo:posts.0', []).map((postData, index) => {
            return <BlogPostListItem key={get(postData, 'slug')} className="blog-post-list-item" featured={index === 0} data={postData} />;
          })*/}
          {posts.map((postData, index) => {
            return <BlogPostListItem key={postData.slug} className="blog-post-list-item" featured={index === 0} data={postData} />;
          })}
        </section>
      </article>
    );
  }
}