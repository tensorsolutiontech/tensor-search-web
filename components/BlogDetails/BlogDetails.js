import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import BlogData from "../../data/blog.json";

import Categories from "../Blog/BlogItems/Categories";
import BlogPost from "../Blog/BlogItems/BlogPost";
import Archives from "../Blog/BlogItems/Archives";
import BlogTags from "../Blog/BlogItems/BlogTags";

const SingleBlog = () => {
  const router = useRouter();
  const postId = parseInt(router.query.blogId);
  let blogPosts = JSON.parse(JSON.stringify(BlogData.blog));

  const matchedBlog = blogPosts.find((post) => post.id === postId);

  useEffect(() => {
    if (postId && !matchedBlog) {
      router.push("/blog");
    }
  }, [matchedBlog, router]);

  return (
    <>
      <div className="rainbow-blog-section rainbow-section-gap-big bg-color-1">
        {matchedBlog && (
          <div className="container">
            <div className="row row--30">
              <div className="col-lg-8">
                <div className="rainbow-blog-details-area">
                  {matchedBlog.blogImg ?
                    <>
                      <div className="post-page-banner">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="content text-center">
                                <div className="thumbnail" style={{marginBotton: "10px"}}>
                                  <Image
                                    className="w-100 radius"
                                    src={matchedBlog.blogImg}
                                    width={790}
                                    height={445}
                                    alt="Blog Images"
                                  />
                                </div>
                                <ul className="rainbow-meta-list">
                                  <li>
                                    <i className="feather-user me-2"></i>
                                    <a href="#">Tensor Solution Tech Pvt ltd</a>
                                  </li>
                                  <li>
                                    <i className="feather-calendar me-2"></i>
                                    {matchedBlog.date}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  : 
                    <></>
                  }


                  <div className="blog-details-content pt--40">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="content">
                            <h2 className="title">{matchedBlog.title}</h2>
                            {
                              matchedBlog.contents.map((content, idx) => (

                                content.hasOwnProperty('p') ? 
                                  (<p key={idx}>{content["p"]}</p>) 
                                :
                                  content.hasOwnProperty('img_url') ? 
                                    (
                                      <p>
                                        <Image
                                          className="w-100 radius"
                                          src={content["img_url"]}
                                          width={content["img_width"]}
                                          height={content["img_height"]}
                                          alt={content["img_alt"]}
                                        />
                                      </p>
                                    )
                                  :
                                    content.hasOwnProperty('heading1') ?
                                      (
                                        <p>
                                          <h6>{content["heading"]}</h6>
                                          
                                          {content['body'].map((body, jdx) => (
                                            <p>{body}</p>
                                          ))}
                                        </p>
                                      )
                                    :
                                      content.hasOwnProperty('heading') ?
                                        (
                                          <p>
                                            <h6>{content["heading"]}</h6>
                                            {content['contents'].map((headingContents, kdx) => (
                                              headingContents.hasOwnProperty('p') ?
                                                (<p key={kdx}>{headingContents["p"]}</p>)
                                              :
                                                (
                                                  headingContents.hasOwnProperty('li') ?
                                                    <ol>
                                                      {headingContents['li'].map((list, ldx) => (
                                                        
                                                            (list.hasOwnProperty('heading') ?
                                                              <li>
                                                                <h7>{list['heading']}</h7>
                                                                <p>{list["p"]}</p>
                                                              </li>
                                                            :
                                                              <li>{list["p"]}</li>
                                                            )
                                                      ))}
                                                      </ol>
                                                  
                                                  :
                                                    <ol></ol>
                                                )
                                            ))}
                                          </p>
                                        )
                                      :
                                      ''

                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt_md--40 mt_sm--40">
                <aside className="rainbow-sidebar">
                  <div className="rbt-single-widget widget_search mt--40">
                    <div className="inner">
                      <form className="blog-search" action="#">
                        <input type="text" placeholder="Search ..." />
                        <button className="search-button">
                          <i className="feather-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="rbt-single-widget widget_categories mt--40">
                    <h3 className="title">Categories</h3>
                    <Categories category={BlogData && BlogData.categories} />
                  </div>
                  <div className="rbt-single-widget widget_recent_entries mt--40">
                    <h3 className="title">Post</h3>
                    <BlogPost blogpost={BlogData && BlogData.blog} />
                  </div>
                  <div className="rbt-single-widget widget_archive mt--40">
                    <h3 className="title">Archives</h3>
                    <Archives blogarc={BlogData && BlogData.blog} />
                  </div>
                  <div className="rbt-single-widget widget_tag_cloud mt--40">
                    <h3 className="title">Tags</h3>
                    <BlogTags tags={BlogData && BlogData.tags} />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleBlog;
