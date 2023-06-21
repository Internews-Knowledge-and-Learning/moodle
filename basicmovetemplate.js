<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
</script>
<script>
    $(document).ready(function() {
        console.log("test");
        var element = $('.block_completionstatus .card-text .table-responsive tr.lastrow td.lastcol').detach();
        $('.drawer-left .drawerheader').append(element);
    });
</script>
