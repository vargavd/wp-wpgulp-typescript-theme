<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ST_Base_Theme
 */

get_header();
?>

	<div class="st-base-page">

		<?php
		if ( have_posts() ) :
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();
    
                the_title( '<h1 class="entry-title">', '</h1>' );

                the_content();
			endwhile;

			the_posts_navigation();

		endif;
		?>

	</div>

<?php
// get_sidebar();
get_footer();
