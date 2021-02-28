<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package ST_Base_Theme
 */

get_header();
?>

	<div class="st-base-page twg-post-single">

		<?php
            while ( have_posts() ) {
                the_post();
    
                the_title( '<h1 class="entry-title">', '</h1>' );

                the_content();
            }
		?>

	</div>

<?php
//get_sidebar();
get_footer();
