"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}function _toConsumableArray(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}Array.from||(Array.from=function(){var t=Object.prototype.toString,a=function(a){return"function"==typeof a||"[object Function]"===t.call(a)},e=function(t){var a=Number(t);return isNaN(a)?0:0!==a&&isFinite(a)?(a>0?1:-1)*Math.floor(Math.abs(a)):a},o=Math.pow(2,53)-1,n=function(t){var a=e(t);return Math.min(Math.max(a,0),o)};return function(t){var e=this,o=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var r,s=arguments.length>1?arguments[1]:void 0;if(void 0!==s){if(!a(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(r=arguments[2])}for(var i,l=n(o.length),d=a(e)?Object(new e(l)):new Array(l),p=0;p<l;)i=o[p],d[p]=s?void 0===r?s(i,p):s.call(r,i,p):i,p+=1;return d.length=l,d}}());var alm_is_filtering=!1;!function(t){t.fn.almFilter=function(a,e,o){o.target?t(".ajax-load-more-wrap[data-id='"+o.target+"']").each(function(n){var r=t(this);t.fn.almFilterTransition(a,e,o,r)}):t(".ajax-load-more-wrap").each(function(n){var r=t(this);t.fn.almFilterTransition(a,e,o,r)})},t.fn.almFilterTransition=function(t,e,o,n){"slide"===t?n.slideUp(e,function(){a(e,o,n)}):"fade"===t||"masonry"===t?n.fadeOut(e,function(){a(e,o,n)}):a(e,o,n)};var a=function(t,a,o){var n=o.get(0),r=n.querySelectorAll(".alm-listing");[].concat(_toConsumableArray(r)).forEach(function(t){t.innerHTML=""});var s=n.querySelector(".alm-load-more-btn");s&&s.classList.remove("done"),e(t,a,o)},e=function(a,e,o){t.each(e,function(a,e){a=a.replace(/\W+/g,"-").replace(/([a-z\d])([A-Z])/g,"$1-$2"),t(".alm-listing",o).attr("data-"+a,e)}),t.isFunction(t.fn.almFilterComplete)&&t.fn.almFilterComplete(),alm_is_filtering=!0,o.fadeIn(a),e.target?t(".ajax-load-more-wrap[data-id="+e.target+"]").ajaxloadmore():t(".ajax-load-more-wrap").ajaxloadmore()}}(jQuery);var almMasonryInit=!0,almMasonry=function t(a,e,o,n,r,s,i,l){var d=(s+100)/1e3+"s",p="scale(0.5)",c="scale(1)";"zoom-out"===n&&(p="translateY(-20px) scale(1.25)",c="translateY(0) scale(1)"),"slide-up"===n&&(p="translateY(50px)",c="translateY(0)"),"slide-down"===n&&(p="translateY(-50px)",c="translateY(0)"),"none"===n&&(p="translateY(0)",c="translateY(0)"),r="true"===r,l?(a.masonry("destroy"),almMasonryInit=!0,a.append(e),t(a,e,o,n,r,s,!0,!1)):almMasonryInit&&i?(almMasonryInit=!1,a.imagesLoaded(function(){e.fadeIn(s),a.masonry({itemSelector:o,transitionDuration:d,columnWidth:o,horizontalOrder:r,hiddenStyle:{transform:p,opacity:0},visibleStyle:{transform:c,opacity:1}}),a.masonry("reloadItems")})):(a.append(e),a.imagesLoaded(function(){e.show(),a.masonry("appended",e)}))};!function(t){t.ajaxloadmore=function(a,e){"true"===alm_localize.scrolltop&&t(window).scrollTop(0);var o=this;o.AjaxLoadMore={},o.window=t(window),o.page=0,o.posts=0,o.totalposts=0,o.proceed=!1,o.disable_ajax=!1,o.init=!0,o.loading=!0,o.finished=!1,o.el=a,o.container=a,o.container.addClass("alm-"+e).attr("data-alm-id",e),o.content=t(".alm-ajax",o.container),o.content_preloaded=t(".alm-listing.alm-preloaded",o.container),o.canonical_url=o.el.attr("data-canonical-url"),o.is_search=o.el.attr("data-search"),o.slug=o.el.attr("data-slug"),o.post_id=o.el.attr("data-post-id"),o.prefix="alm-",o.repeater=o.content.attr("data-repeater"),o.theme_repeater=o.content.attr("data-theme-repeater"),o.post_type=o.content.attr("data-post-type"),o.post_type=o.post_type.split(","),o.sticky_posts=o.content.attr("data-sticky-posts"),o.btnWrap=t(".alm-btn-wrap",o.container),o.button_label=o.content.attr("data-button-label"),o.button_loading_label=o.content.attr("data-button-loading-label"),o.scroll_distance=parseInt(o.content.attr("data-scroll-distance")),o.scroll_container=o.content.attr("data-scroll-container"),o.max_pages=parseInt(o.content.attr("data-max-pages")),o.pause_override=o.content.attr("data-pause-override"),o.pause=o.content.attr("data-pause"),o.transition=o.content.attr("data-transition"),o.transition_container=o.content.attr("data-transition-container"),o.tcc=o.content.attr("data-transition-container-classes"),o.speed=o.content.attr("data-transition-speed"),o.images_loaded=o.content.attr("data-images-loaded"),o.destroy_after=o.content.attr("data-destroy-after"),o.lang=o.content.attr("data-lang"),o.orginal_posts_per_page=o.content.attr("data-posts-per-page"),o.posts_per_page=o.content.attr("data-posts-per-page"),o.offset=o.content.attr("data-offset"),o.cache=o.content.attr("data-cache"),o.cache_id=o.content.attr("data-cache-id"),o.cache_path=o.content.attr("data-cache-path"),o.cache_logged_in=o.content.attr("data-cache-logged-in"),o.cta=o.content.attr("data-cta"),o.cta_position=o.content.attr("data-cta-position"),o.cta_repeater=o.content.attr("data-cta-repeater"),o.cta_theme_repeater=o.content.attr("data-cta-theme-repeater"),o.acf=o.content.attr("data-acf"),o.acf_field_type=o.content.attr("data-acf-field-type"),o.acf_field_name=o.content.attr("data-acf-field-name"),o.acf_post_id=o.content.attr("data-acf-post-id"),o.nextpage=o.content.attr("data-nextpage"),o.nextpage_urls=o.content.attr("data-nextpage-urls"),o.nextpage_scroll=o.content.attr("data-nextpage-scroll"),o.nextpage_pageviews=o.content.attr("data-nextpage-pageviews"),o.nextpage_post_id=o.content.attr("data-nextpage-post-id"),o.nextpage_startpage=o.content.attr("data-nextpage-startpage"),o.previous_post=o.content.attr("data-previous-post"),o.previous_post_id=o.content.attr("data-previous-post-id"),o.previous_post_taxonomy=o.content.attr("data-previous-post-taxonomy"),o.previous_post_excluded_terms=o.content.attr("data-previous-post-excluded-terms"),o.comments=o.content.attr("data-comments"),"true"===o.comments&&(o.content=t(".alm-comments",o.container)),o.comments_post_id=o.content.attr("data-comments_post_id"),o.comments_per_page=o.content.attr("data-comments_per_page"),o.comments_type=o.content.attr("data-comments_type"),o.comments_style=o.content.attr("data-comments_style"),o.comments_template=o.content.attr("data-comments_template"),o.comments_callback=o.content.attr("data-comments_callback"),o.restapi=o.content.attr("data-restapi"),o.restapi_base_url=o.content.attr("data-restapi-base-url"),o.restapi_namespace=o.content.attr("data-restapi-namespace"),o.restapi_endpoint=o.content.attr("data-restapi-endpoint"),o.restapi_template_id=o.content.attr("data-restapi-template-id"),o.restapi_debug=o.content.attr("data-restapi-debug"),o.seo=o.content.attr("data-seo"),o.preloaded=o.content.attr("data-preloaded"),o.preloaded_amount=o.content.attr("data-preloaded-amount"),o.paging=o.content.attr("data-paging"),o.paging_controls=o.content.attr("data-paging-controls"),o.paging_show_at_most=o.content.attr("data-paging-show-at-most"),o.paging_classes=o.content.attr("data-paging-classes"),o.paging_init=!0,o.users="true"===o.content.attr("data-users"),o.users&&(o.orginal_posts_per_page=o.content.attr("data-users-per-page"),o.posts_per_page=o.content.attr("data-users-per-page")),"true"===o.restapi?(o.restapi=!0,void 0===o.restapi_debug&&(o.restapi_debug=!1),""===o.restapi_template_id&&(o.restapi=!1)):o.restapi=!1,"true"===o.paging?(o.paging=!0,void 0===o.paging_show_at_most&&(o.paging_show_at_most=7),"true"===o.preloaded&&(o.pause=!0)):o.paging=!1,o.paging_controls="true"===o.paging_controls,void 0===o.cache&&(o.cache=!1),void 0===o.cache_logged_in&&(o.cache_logged_in=!1),void 0===o.comments_per_page&&(o.comments_per_page="5"),"true"===o.preloaded?(o.preload_wrap=o.content.prev(".alm-preloaded"),o.preloaded_total_posts=parseInt(o.preload_wrap.attr("data-total-posts")),void 0===o.preloaded_amount&&(o.preloaded_amount=!1),o.preloaded_total_posts<=o.preloaded_amount&&(o.disable_ajax=!0)):o.preloaded="false",void 0===o.seo&&(o.seo=!1),"true"===o.seo&&(o.seo=!0),void 0===o.is_search&&(o.is_search=!1),o.search_value="true"===o.is_search?o.slug:"",o.permalink=o.content.attr("data-seo-permalink"),o.pageview=o.content.attr("data-seo-pageview"),o.start_page=o.content.attr("data-seo-start-page"),o.trailing_slash="false"===o.content.attr("data-seo-trailing-slash")?"":"/",o.start_page?(o.seo_scroll=o.content.attr("data-seo-scroll"),o.seo_scroll_speed=o.content.attr("data-seo-scroll-speed"),o.seo_scrolltop=o.content.attr("data-seo-scrolltop"),o.seo_controls=o.content.attr("data-seo-controls"),o.isPaged=!1,o.start_page>1&&(o.isPaged=!0,o.posts_per_page=o.start_page*o.posts_per_page),o.paging&&(o.posts_per_page=o.orginal_posts_per_page)):o.start_page=1,"true"===o.nextpage?(o.nextpage=!0,o.posts_per_page=1):o.nextpage=!1,void 0===o.nextpage_urls&&(o.nextpage_urls="true"),void 0===o.nextpage_scroll&&(o.nextpage_scroll="250:30"),void 0===o.nextpage_pageviews&&(o.nextpage_pageviews="true"),void 0===o.nextpage_post_id&&(o.nextpage=!1,o.nextpage_post_id=null),void 0===o.nextpage_startpage&&(o.nextpage_startpage=1),o.nextpage_startpage>1&&(o.isPaged=!0),o.acf="true"===o.acf,void 0!==o.acf_field_type&&void 0!==o.acf_field_name&&void 0!==o.acf_post_id||(o.acf=!1),"true"===o.previous_post?(o.previous_post=!0,o.previous_post_permalink="",o.previous_post_title="",o.previous_post_slug=""):o.previous_post=!1,void 0===o.previous_post_id&&(o.previous_post_id=""),void 0===o.previous_post_taxonomy&&(o.previous_post_taxonomy=""),void 0===o.previous_post_excluded_terms&&(o.previous_post_excluded_terms=""),o.previous_post_title_template=o.content.attr("data-previous-post-title-template"),o.siteTitle=o.content.attr("data-previous-post-site-title"),o.siteTagline=o.content.attr("data-previous-post-site-tagline"),o.previous_post_pageview=o.content.attr("data-previous-post-pageview"),o.previous_post_scroll=o.content.attr("data-previous-post-scroll"),o.previous_post_scroll_speed=o.content.attr("data-previous-post-scroll-speed"),o.previous_post_scroll_top=o.content.attr("data-previous-post-scrolltop"),o.offset=void 0===o.offset?0:o.offset,(void 0===o.pause||o.seo&&o.start_page>1)&&(o.pause=!1),"true"===o.preloaded&&o.seo&&o.start_page>0&&(o.pause=!1),"true"===o.preloaded&&o.paging&&(o.pause=!0),void 0===o.repeater&&(o.repeater="default"),void 0===o.theme_repeater&&(o.theme_repeater="null"),o.max_pages=void 0===o.max_pages||0===o.max_pages?1e4:o.max_pages,o.scroll_distance=void 0===o.scroll_distance?150:o.scroll_distance,o.scroll_container=void 0===o.scroll_container?"":o.scroll_container,o.transition=void 0===o.transition?"slide":o.transition,o.tcc=void 0===o.tcc?"":o.tcc,o.is_masonry_preloaded=!1,"masonry"===o.transition&&(o.masonry_selector=o.content.attr("data-masonry-selector"),o.masonry_animation=o.content.attr("data-masonry-animation"),o.masonry_horizontalorder=o.content.attr("data-masonry-horizontalorder"),void 0===o.masonry_animation&&(o.masonry_animation="standard"),void 0===o.masonry_horizontalorder&&(o.masonry_horizontalorder="true"),o.masonry_wrap=o.content,o.transition_container=!1,document.body.contains(o.content_preloaded.get(0))&&(o.masonry_wrap=o.content_preloaded,o.is_masonry_preloaded=!0)),o.speed=void 0===o.speed||""===o.speed?250:parseInt(o.speed),void 0===o.content.attr("data-scroll")?o.scroll=!0:"false"===o.content.attr("data-scroll")?o.scroll=!1:o.scroll=!0,o.transition_container=void 0===o.transition_container||"true"===o.transition_container,o.images_loaded=void 0===o.images_loaded?"false":o.images_loaded,o.button_label=void 0===o.button_label?"Older Posts":o.button_label,o.button_loading_label=void 0!==o.button_loading_label&&o.button_loading_label,o.paging?o.content.parent().addClass("loading"):o.button=t(".alm-load-more-btn",o.container),o.AjaxLoadMore.loadPosts=function(){if(!o.disable_ajax)if(o.paging||(o.button.addClass("loading"),!1!==o.button_loading_label&&o.button.html(o.button_loading_label)),o.container.addClass("alm-loading"),o.loading=!0,"true"!==o.cache||o.cache_logged_in)o.AjaxLoadMore.ajax("standard");else{var a;if(o.init&&o.seo&&o.isPaged){a=o.cache_path+o.cache_id+"/page-1-"+o.start_page+".html"}else if(o.nextpage){var e;o.paging?e=parseInt(o.page)+1:(e=parseInt(o.page)+2,o.isPaged&&(e=parseInt(o.page)+parseInt(o.nextpage_startpage)+1)),a=o.cache_path+o.cache_id+"/page-"+e+".html"}else a=o.previous_post?o.cache_path+o.cache_id+"/"+o.previous_post_slug+".html":o.cache_path+o.cache_id+"/page-"+(o.page+1)+".html";t.get(a,function(t){o.AjaxLoadMore.success(t,!0)}).fail(function(){o.AjaxLoadMore.ajax("standard")})}},o.AjaxLoadMore.ajax=function(e){var n="alm_query_posts";if(o.acf_array="",o.acf&&("relationship"!==o.acf_field_type&&(n="alm_acf_query"),o.acf_array={acf:"true",post_id:o.acf_post_id,field_type:o.acf_field_type,field_name:o.acf_field_name}),o.nextpage_array="",o.nextpage&&(n="alm_nextpage_query",o.nextpage_array={nextpage:"true",urls:o.nextpage_urls,scroll:o.nextpage_scroll,pageviews:o.nextpage_pageviews,post_id:o.nextpage_post_id,startpage:o.nextpage_startpage}),o.previous_post_array="",o.previous_post&&(o.previous_post_array={previous_post:"true",id:o.previous_post_id,slug:o.previous_post_slug}),o.comments_array="","true"===o.comments&&(n="alm_comments_query",o.posts_per_page=o.comments_per_page,o.comments_array={comments:"true",post_id:o.comments_post_id,per_page:o.comments_per_page,type:o.comments_type,style:o.comments_style,template:o.comments_template,callback:o.comments_callback}),o.users_array="",o.users&&(n="alm_users_query",o.users_array={users:"true",role:o.content.attr("data-users-role"),include:o.content.attr("data-users-include"),exclude:o.content.attr("data-users-exclude"),per_page:o.posts_per_page,order:o.content.attr("data-users-order"),orderby:o.content.attr("data-users-orderby")}),o.cta_array="","true"===o.cta&&(o.cta_array={cta:"true",cta_position:o.cta_position,cta_repeater:o.cta_repeater,cta_theme_repeater:o.cta_theme_repeater}),o.restapi){var r=wp.template(o.restapi_template_id),s=o.restapi_base_url+"/"+o.restapi_namespace+"/"+o.restapi_endpoint,i={id:a.attr("data-id"),post_id:o.post_id,posts_per_page:o.posts_per_page,page:o.page,offset:o.offset,slug:o.slug,canonical_url:o.canonical_url,post_type:o.post_type,post_format:o.content.attr("data-post-format"),category:o.content.attr("data-category"),category__not_in:o.content.attr("data-category-not-in"),tag:o.content.attr("data-tag"),tag__not_in:o.content.attr("data-tag-not-in"),taxonomy:o.content.attr("data-taxonomy"),taxonomy_terms:o.content.attr("data-taxonomy-terms"),taxonomy_operator:o.content.attr("data-taxonomy-operator"),taxonomy_relation:o.content.attr("data-taxonomy-relation"),meta_key:o.content.attr("data-meta-key"),meta_value:o.content.attr("data-meta-value"),meta_compare:o.content.attr("data-meta-compare"),meta_relation:o.content.attr("data-meta-relation"),meta_type:o.content.attr("data-meta-type"),author:o.content.attr("data-author"),year:o.content.attr("data-year"),month:o.content.attr("data-month"),day:o.content.attr("data-day"),post_status:o.content.attr("data-post-status"),order:o.content.attr("data-order"),orderby:o.content.attr("data-orderby"),post__in:o.content.attr("data-post-in"),post__not_in:o.content.attr("data-post-not-in"),search:o.content.attr("data-search"),custom_args:o.content.attr("data-custom-args"),lang:o.lang,preloaded:o.preloaded,preloaded_amount:o.preloaded_amount,seo_start_page:o.start_page};t.ajax({type:"GET",url:s,data:i,dataType:"JSON",beforeSend:function(){1==o.page||o.paging||o.button.addClass("loading")},success:function(a){var e,n=a.html,s=a.meta,i=s.postcount,l=s.totalposts;t.each(n,function(t){var a=n[t];"true"===o.restapi_debug&&console.log(a),e+=r(a)});var d={html:e,meta:{postcount:i,totalposts:l}};o.AjaxLoadMore.success(d,!1)}})}else t.ajax({type:"GET",url:alm_localize.ajaxurl,dataType:"JSON",data:{action:n,nonce:alm_localize.alm_nonce,query_type:e,post_id:o.post_id,id:a.attr("data-id"),slug:o.slug,canonical_url:o.canonical_url,cache_id:o.cache_id,cache_logged_in:o.cache_logged_in,repeater:o.repeater,theme_repeater:o.theme_repeater,acf:o.acf_array,nextpage:o.nextpage_array,cta:o.cta_array,comments:o.comments_array,users:o.users_array,post_type:o.post_type,sticky_posts:o.sticky_posts,post_format:o.content.attr("data-post-format"),category:o.content.attr("data-category"),category__not_in:o.content.attr("data-category-not-in"),tag:o.content.attr("data-tag"),tag__not_in:o.content.attr("data-tag-not-in"),taxonomy:o.content.attr("data-taxonomy"),taxonomy_terms:o.content.attr("data-taxonomy-terms"),taxonomy_operator:o.content.attr("data-taxonomy-operator"),taxonomy_relation:o.content.attr("data-taxonomy-relation"),meta_key:o.content.attr("data-meta-key"),meta_value:o.content.attr("data-meta-value"),meta_compare:o.content.attr("data-meta-compare"),meta_relation:o.content.attr("data-meta-relation"),meta_type:o.content.attr("data-meta-type"),author:o.content.attr("data-author"),year:o.content.attr("data-year"),month:o.content.attr("data-month"),day:o.content.attr("data-day"),post_status:o.content.attr("data-post-status"),order:o.content.attr("data-order"),orderby:o.content.attr("data-orderby"),post__in:o.content.attr("data-post-in"),post__not_in:o.content.attr("data-post-not-in"),exclude:o.content.attr("data-exclude"),search:o.content.attr("data-search"),custom_args:o.content.attr("data-custom-args"),posts_per_page:o.posts_per_page,page:o.page,offset:o.offset,preloaded:o.preloaded,preloaded_amount:o.preloaded_amount,seo_start_page:o.start_page,paging:o.paging,previous_post:o.previous_post_array,lang:o.lang},beforeSend:function(){1==o.page||o.paging||o.button.addClass("loading")},success:function(a){"standard"===e?o.AjaxLoadMore.success(a,!1):"totalpages"===e&&o.paging&&o.nextpage?t.isFunction(t.fn.almBuildPagination)&&t.fn.almBuildPagination(a,o):"totalposts"===e&&o.paging&&t.isFunction(t.fn.almBuildPagination)&&t.fn.almBuildPagination(a,o)},error:function(t,a,e){o.AjaxLoadMore.error(t,a,e)}})},o.paging&&(o.nextpage?o.AjaxLoadMore.ajax("totalpages"):o.AjaxLoadMore.ajax("totalposts")),o.AjaxLoadMore.success=function(a,e){o.previous_post&&o.AjaxLoadMore.getPreviousPost();var n,r,s;if(e?n=a:(n=a.html,r=a.meta,o.posts=o.posts+r.postcount,s=r.postcount,o.totalposts=r.totalposts,"true"===o.preloaded&&(o.totalposts=o.totalposts-o.preloaded_amount)),o.data=t(n),e&&(s=o.data.length),o.init&&(o.paging?s>0&&(o.el=t('<div class="alm-reveal'+o.tcc+'"/>'),o.el.append('<div class="alm-paging-content"></div><div class="alm-paging-loading"></div>'),t(".alm-paging-content",o.el).append(o.data).hide(),o.content.append(o.el),o.content.parent().removeClass("loading"),o.AjaxLoadMore.resetBtnText(),t(".alm-paging-content",o.el).fadeIn(o.speed,"alm_easeInOutQuad",function(){var a=parseInt(o.content.css("padding-top")),e=parseInt(o.content.css("padding-bottom"));o.content.css("height",o.el.height()+a+e+"px"),t.isFunction(t.fn.almFadePageControls)&&t.fn.almFadePageControls(o.btnWrap)})):o.button.html(o.button_label),0===s&&t.isFunction(t.fn.almEmpty)&&t.fn.almEmpty(o),o.isPaged&&(o.users?o.posts_per_page=o.content.attr("data-users-per-page"):o.posts_per_page=o.content.attr("data-posts-per-page"),o.page=o.start_page-1)),s>0){if(o.paging)o.init?(o.container.removeClass("alm-loading"),o.AjaxLoadMore.triggerAddons(o)):t(".alm-paging-content",o.el).html("").append(o.data).almWaitForImages().done(function(){t(".alm-paging-loading",o.el).fadeOut(o.speed),t.isFunction(t.fn.almOnPagingComplete)&&t.fn.almOnPagingComplete(o),o.container.removeClass("alm-loading"),o.AjaxLoadMore.triggerAddons(o)});else{if(o.previous_post)o.el=t('<div class="alm-reveal alm-previous-post post-'+o.previous_post_id+'" data-id="'+o.previous_post_id+'" data-title="'+o.previous_post_title+'" data-url="'+o.previous_post_permalink+'" data-page="'+o.page+'"/>'),o.el.append(o.data).hide();else if(o.transition_container){var i;if(o.init&&o.start_page>1){var l=[],d=parseInt(o.posts_per_page);"true"===o.cta&&(d+=1);Math.ceil(s/d);for(var p=0;p<s;p+=d)l.push(o.data.slice(p,d+p));o.el=o.content;for(var c=0;c<l.length;c++){var g,_="true"===o.preloaded?1:0;c>0||"true"===o.preloaded?(i=c+1+_,g=t("default"===o.permalink?'<div class="alm-reveal alm-seo'+o.tcc+'" data-url="'+o.canonical_url+o.search_value+"&paged="+i+'" data-page="'+i+'" />':'<div class="alm-reveal alm-seo'+o.tcc+'" data-url="'+o.canonical_url+"page/"+i+o.trailing_slash+o.search_value+'" data-page="'+i+'" />')):g=t('<div class="alm-reveal alm-seo'+o.tcc+'"  data-url="'+o.canonical_url+o.search_value+'" data-page="1" />'),g.append(l[c]),g=t(g),o.el.append(g).hide()}}else{if(o.seo&&o.page>0||"true"===o.preloaded){var u="true"===o.preloaded?1:0;i=o.page+1+u,o.seo?"default"===o.permalink?o.el=t('<div class="alm-reveal alm-seo'+o.tcc+'" data-url="'+o.canonical_url+o.search_value+"&paged="+i+'" data-page="'+i+'" />'):o.el=t('<div class="alm-reveal alm-seo'+o.tcc+'" data-url="'+o.canonical_url+"page/"+i+o.trailing_slash+o.search_value+'" data-page="'+i+'" />'):o.el=t('<div class="alm-reveal'+o.tcc+'" />')}else o.seo?o.el=t('<div class="alm-reveal alm-seo'+o.tcc+'" data-url="'+o.canonical_url+o.search_value+'" data-page="1" />'):o.el=t('<div class="alm-reveal'+o.tcc+'" />');o.el.append(o.data).hide()}}else o.data.hide(),o.el=o.data;("masonry"!==o.transition||o.init&&!o.is_masonry_preloaded)&&o.content.append(o.el),"fade"===o.transition?"true"===o.images_loaded?o.el.almWaitForImages().done(function(){o.el.fadeIn(o.speed,"alm_easeInOutQuad",function(){o.loading=!1,o.paging||(o.button.delay(o.speed).removeClass("loading"),o.AjaxLoadMore.resetBtnText()),o.container.removeClass("alm-loading"),o.AjaxLoadMore.triggerAddons(o)})}):o.el.fadeIn(o.speed,"alm_easeInOutQuad",function(){o.loading=!1,o.paging||(o.button.delay(o.speed).removeClass("loading"),o.AjaxLoadMore.resetBtnText()),o.container.removeClass("alm-loading"),o.AjaxLoadMore.triggerAddons(o)}):"masonry"===o.transition?(almMasonry(o.masonry_wrap,o.el,o.masonry_selector,o.masonry_animation,o.masonry_horizontalorder,o.speed,o.init,alm_is_filtering),o.paging||(o.button.delay(o.speed).removeClass("loading"),o.AjaxLoadMore.resetBtnText()),o.loading=!1,o.container.removeClass("alm-loading"),o.AjaxLoadMore.triggerAddons(o)):"none"===o.transition?("true"===o.images_loaded?o.el.almWaitForImages().done(function(){o.el.show(),o.AjaxLoadMore.triggerAddons(o)}):(o.el.show(),o.AjaxLoadMore.triggerAddons(o)),o.loading=!1,o.paging||(o.button.delay(o.speed).removeClass("loading"),o.AjaxLoadMore.resetBtnText())):"true"===o.images_loaded?o.el.almWaitForImages().done(function(){o.el.slideDown(o.speed,"alm_easeInOutQuad",function(){o.loading=!1,o.paging||(o.button.delay(o.speed).removeClass("loading"),o.AjaxLoadMore.resetBtnText()),o.container.removeClass("alm-loading"),o.AjaxLoadMore.triggerAddons(o)})}):o.el.slideDown(o.speed,"alm_easeInOutQuad",function(){o.loading=!1,o.paging||(o.button.delay(o.speed).removeClass("loading"),o.AjaxLoadMore.resetBtnText()),o.container.removeClass("alm-loading"),o.AjaxLoadMore.triggerAddons(o)})}t.isFunction(t.fn.almComplete)&&("true"===o.images_loaded?o.el.almWaitForImages().done(function(){t.fn.almComplete(o)}):t.fn.almComplete(o)),o.cache?s<o.posts_per_page&&o.AjaxLoadMore.triggerDone():o.posts>=o.totalposts&&!o.previous_post&&o.AjaxLoadMore.triggerDone()}else o.paging||(o.button.delay(o.speed).removeClass("loading").addClass("done"),o.AjaxLoadMore.resetBtnText()),o.AjaxLoadMore.triggerDone();if(void 0!==o.destroy_after&&""!==o.destroy_after){var m=o.page+1;o.preload&&m++,m==o.destroy_after&&(o.disable_ajax=!0,o.paging||(o.button.delay(o.speed).fadeOut(o.speed),t.isFunction(t.fn.almDestroyed)&&t.fn.almDestroyed(o)))}alm_is_filtering=!1,o.init=!1},o.AjaxLoadMore.pagingPreloadedInit=function(a){o.el=t('<div class="alm-reveal'+o.tcc+'"/>'),o.el.append('<div class="alm-paging-content">'+a+'</div><div class="alm-paging-loading"></div>'),o.content.append(o.el),o.content.parent().removeClass("loading"),o.AjaxLoadMore.resetBtnText();var e=parseInt(o.content.css("padding-top")),n=parseInt(o.content.css("padding-bottom"));o.content.css("height",o.el.height()+e+n+"px"),t.isFunction(t.fn.almFadePageControls)&&t.fn.almFadePageControls(o.btnWrap)},o.AjaxLoadMore.pagingNextpageInit=function(a){o.el=t('<div class="alm-reveal alm-nextpage"/>'),o.el.append('<div class="alm-paging-content">'+a+'</div><div class="alm-paging-loading"></div>'),o.el.appendTo(o.content),o.content.parent().removeClass("loading"),o.AjaxLoadMore.resetBtnText();var e=parseInt(o.content.css("padding-top")),n=parseInt(o.content.css("padding-bottom"));o.content.css("height",o.el.height()+e+n+"px"),t.isFunction(t.fn.almSetNextPageVars)&&t.fn.almSetNextPageVars(o),setTimeout(function(){t.isFunction(t.fn.almFadePageControls)&&t.fn.almFadePageControls(o.btnWrap),t.isFunction(t.fn.almOnWindowResize)&&t.fn.almOnWindowResize(o)},200)},o.fetchingPreviousPost=!1,o.AjaxLoadMore.getPreviousPost=function(){o.fetchingPreviousPost=!0;var a={action:"alm_query_previous_post",id:o.previous_post_id,taxonomy:o.previous_post_taxonomy,excluded_terms:o.previous_post_excluded_terms};t.ajax({type:"GET",dataType:"JSON",url:alm_localize.ajaxurl,data:a,success:function(a){a.has_previous_post?(o.content.attr("data-previous-post-id",a.prev_id),o.previous_post_id=a.prev_id,o.previous_post_permalink=a.prev_permalink,o.previous_post_title=a.prev_title,o.previous_post_slug=a.prev_slug):a.has_previous_post||o.AjaxLoadMore.triggerDone(),t.isFunction(t.fn.almSetPreviousPost)&&t.fn.almSetPreviousPost(o,a.current_id,a.permalink,a.title),o.fetchingPreviousPost=!1},error:function(t,a,e){o.AjaxLoadMore.error(t,a,e),o.fetchingPreviousPost=!1}})},o.AjaxLoadMore.triggerAddons=function(a){t.isFunction(t.fn.almSEO)&&a.seo&&t.fn.almSEO(a,!1),t.isFunction(t.fn.almSetNextPage)&&t.fn.almSetNextPage(a)},o.AjaxLoadMore.triggerDone=function(){o.loading=!1,o.finished=!0,o.paging||o.button.addClass("done"),t.isFunction(t.fn.almDone)&&setTimeout(function(){t.fn.almDone(o)},o.speed+10)},o.AjaxLoadMore.resetBtnText=function(){!1!==o.button_loading_label&&(o.paging||o.button.html(o.button_label))},o.AjaxLoadMore.error=function(t,a,e){o.loading=!1,o.paging||(o.button.removeClass("loading"),o.AjaxLoadMore.resetBtnText()),console.log(e)},o.paging||o.fetchingPreviousPost||(o.button.unbind("click"),o.button.on("click",function(a){a.preventDefault(),"true"===o.pause&&(o.pause=!1,o.pause_override=!1,o.AjaxLoadMore.loadPosts()),o.loading||o.finished||t(this).hasClass("done")||(o.loading=!0,o.page++,o.AjaxLoadMore.loadPosts())})),o.paging&&(o.window.unbind("resizeEnd"),o.window.bind("resizeEnd",function(){t.isFunction(t.fn.almOnWindowResize)&&t.fn.almOnWindowResize(o)}),o.window.unbind("resize"),o.window.bind("resize",function(){this.resizeTO&&clearTimeout(this.resizeTO),this.resizeTO=setTimeout(function(){t(this).trigger("resizeEnd")},250)})),o.AjaxLoadMore.isVisible=function(){return o.visible=!1,o.el.is(":visible")&&(o.visible=!0),o.visible},o.scroll&&!o.paging&&(""!==o.scroll_container&&(o.window=t(o.scroll_container)),o.window.bind("scroll touchstart",function(){if(o.AjaxLoadMore.isVisible()&&!o.fetchingPreviousPost){var t=o.button.offset().top,a=Math.round(t-(o.window.height()-o.scroll_distance)),e=o.window.scrollTop()>=a;""!==o.scroll_container&&(e=o.button.offset().top-(o.window.height()-o.scroll_distance)<o.window.offset().top),!o.loading&&!o.finished&&e&&o.page<o.max_pages-1&&o.proceed&&"true"===o.pause&&"true"===o.pause_override?o.button.trigger("click"):!o.loading&&!o.finished&&e&&o.page<o.max_pages-1&&o.proceed&&"true"!==o.pause&&(o.page++,o.AjaxLoadMore.loadPosts())}})),o.AjaxLoadMore.init=function(){o.paging||o.previous_post||(o.disable_ajax?(o.finished=!0,o.button.addClass("done")):"true"===o.pause?(o.button.html(o.button_label),o.loading=!1):o.AjaxLoadMore.loadPosts()),o.previous_post&&(o.AjaxLoadMore.getPreviousPost(),o.loading=!1),"true"===o.preloaded&&o.seo&&!o.paging&&setTimeout(function(){t.isFunction(t.fn.almSEO)&&o.start_page<1&&t.fn.almSEO(o,!0)},300),o.nextpage&&t(".alm-nextpage").length>1&&t(".alm-nextpage").length==t(".alm-nextpage").eq(0).data("total-pages")&&o.AjaxLoadMore.triggerDone(),o.window.bind("load",function(){o.is_masonry_preloaded&&almMasonry(o.masonry_wrap,o.el,o.masonry_selector,o.masonry_animation,o.masonry_horizontalorder,o.speed,!0,!1)})},o.AjaxLoadMore.init(),setTimeout(function(){o.proceed=!0},300),t.fn.almUpdateCurrentPage=function(a,e,o){o.page=a,o.nextpage&&!o.paging&&(o.page=o.page-1);var n="";o.paging_init&&"true"===o.preloaded?(n=t(".alm-preloaded .alm-reveal",o.el).html(),t(".alm-preloaded",o.el).remove(),o.preloaded_amount=0,o.AjaxLoadMore.pagingPreloadedInit(n),o.paging_init=!1,o.init=!1):o.paging_init&&o.nextpage?(n=t(".alm-nextpage",o.el).html(),t(".alm-nextpage",o.el).remove(),o.AjaxLoadMore.pagingNextpageInit(n),o.paging_init=!1,o.init=!1):o.AjaxLoadMore.loadPosts()},t.fn.almGetParentContainer=function(){return o.el.closest("#ajax-load-more")},t.fn.almGetObj=function(){return o},t.fn.almTriggerClick=function(){o.button.trigger("click")},t.easing.alm_easeInOutQuad=function(t,a,e,o,n){return(a/=n/2)<1?o/2*a*a+e:-o/2*(--a*(a-2)-1)+e}},t.fn.ajaxloadmore=function(){return this.each(function(a){new t.ajaxloadmore(t(this),a)})};var a=document.querySelectorAll(".ajax-load-more-wrap");a.length&&[].concat(_toConsumableArray(a)).forEach(function(a,e){new t.ajaxloadmore(t(a),e)})}(jQuery);var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t(require("jquery")):t(jQuery)}(function(t){t.almWaitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},t.expr[":"]["has-src"]=function(a){return t(a).is('img[src][src!=""]')},t.expr[":"].uncached=function(a){return!!t(a).is(":has-src")&&!a.complete},t.fn.almWaitForImages=function(){var a,e,o,n=0,r=0,s=t.Deferred();if(t.isPlainObject(arguments[0])?(o=arguments[0].waitForAll,e=arguments[0].each,a=arguments[0].finished):1===arguments.length&&"boolean"===t.type(arguments[0])?o=arguments[0]:(a=arguments[0],e=arguments[1],o=arguments[2]),a=a||t.noop,e=e||t.noop,o=!!o,!t.isFunction(a)||!t.isFunction(e))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var i=t(this),l=[],d=t.almWaitForImages.hasImageProperties||[],p=t.almWaitForImages.hasImageAttributes||[],c=/url\(\s*(['"]?)(.*?)\1\s*\)/g;o?i.find("*").addBack().each(function(){var a=t(this);a.is("img:has-src")&&l.push({src:a.attr("src"),element:a[0]}),t.each(d,function(t,e){var o,n=a.css(e);if(!n)return!0;for(;o=c.exec(n);)l.push({src:o[2],element:a[0]})}),t.each(p,function(e,o){var n,r=a.attr(o);if(!r)return!0;n=r.split(","),t.each(n,function(e,o){o=t.trim(o).split(" ")[0],l.push({src:o,element:a[0]})})})}):i.find("img:has-src").each(function(){l.push({src:this.src,element:this})}),n=l.length,r=0,0===n&&(a.call(i[0]),s.resolveWith(i[0])),t.each(l,function(o,l){var d=new Image,p="load.almWaitForImages error.almWaitForImages";t(d).one(p,function o(d){var c=[r,n,"load"==d.type];if(r++,e.apply(l.element,c),s.notifyWith(l.element,c),t(this).off(p,o),r==n)return a.call(i[0]),s.resolveWith(i[0]),!1}),d.src=l.src})}),s.promise()}});