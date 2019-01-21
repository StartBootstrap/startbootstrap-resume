<!-- PARTIAL: _modal.php -->

<div class="crate-image">
  <span>
  <img class="img-fluid tag-image_border tag-trigger_modal" src="<?php echo $_mdata['imgUrl'];?>" data-toggle="modal" data-target="#<?php echo $_mdata['target'];?>" alt="Synergy Project Dashboard">
  </span>
  <span><p><?php echo $_mdata['desc'];?></p></span>
</div>

<!-- Modal -->
<div class="modal fade" id="<?php echo $_mdata['target'];?>" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Project Dashboard</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <img class="img-fluid" src="<?php echo $_mdata['imgUrl'];?>" alt="<?php echo $_mdata['alt'];?>">
      </div>
    </div>
  </div>
</div>
