<?php

/**
 * @file
 * template.php
 */

function tr_bootstrap_preprocess_page(&$vars) {
  if (!empty($vars['node']) && in_array($vars['node']->type, array('location'))) {
    $vars['title'] = '';
  }
}
