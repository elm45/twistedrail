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

  <section class="event_details row clearfix">
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
    <?php if ($field_date): ?>
      <div class="col-sm-6 block">
        <section class="date_section coaster-block-subtle">
          <?php print render($content['field_date']); ?>
        </section>
      </div>
    <?php endif; ?>
  </div>

  <section class "event_content row clearfix">
    <?php if ($field_image): ?>
      <div class="col-md-7 col-sm-12 event-desctiption">
          <?php print render($content['body']); ?>
      </div>
      <div class="col-md-5 col-sm-8 col-sm-push-2 col-md-push-0 col-xs-12 event-image">
          <?php print render($content['field_image']); ?>
      </div>
    <?php else: ?>
      <div class="colo-xs-12 event-desctiption">
          <?php print render($content['body']); ?>
      </div>
    <?php endif; ?>
  </section>

  <?php
    // Hiding node fields to be rendered separately.
    hide($content['comments']);
    hide($content['links']);
    hide($content['field_location']);
    hide($content['field_date']);
    hide($content['field_image']);
    hide($content['body']);
  ?>

    <?php print render($content); ?>


</article>
