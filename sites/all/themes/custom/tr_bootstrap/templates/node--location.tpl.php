<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>

<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>

      <?php if ($node->field_banner_picture): ?>
        <?php $url = file_create_url($node->field_banner_picture[$node->language][0]['uri']); ?>
      <?php endif; ?>

      <?php if ($title): ?>
        <header class="jumbotron location_title" 
          <?php if ($node->field_banner_picture): ?>
            style="background-image:url(<?php echo $url; ?>);"
          <?php endif; ?>>
          <h2><?print $title ?></h2>
        </header>
      <?php endif; ?>

      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>

        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($display_submitted): ?>
        <p class="submitted">
          <?php print $user_picture; ?>
          <?php print $submitted; ?>
        </p>
      <?php endif; ?>

    </header>
  <?php endif; ?>

  <section class="location_details row clearfix">
    <?php if ($field_location): ?>
      <div class="col-sm-6 block">
        <section class="location_section coaster-block-subtle">
          <?php print render($content['field_location']); ?>
          <?php if ($content['field_location']['#items'][0]['phone']): ?>
            <p>Phone: <?php print render($content['field_location']['#items'][0]['phone']); ?></p>
          <?php endif; ?>
        </section>
      </div>
    <?php endif; ?>
    <?php if ($field_hours): ?>
      <div class="col-sm-6 block">
        <section class="hours_section coaster-block-subtle">
          <?php print render($content['field_hours']); ?>
        </section>
      </div>
    <?php endif; ?>
  </div>

  <?php
    // Hiding node fields to be rendered separately.
    hide($content['comments']);
    hide($content['links']);
    hide($content['field_location']);
    hide($content['field_hours']);
  ?>

    <?php print render($content); ?>



</article>
