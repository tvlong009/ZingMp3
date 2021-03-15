<!-- BEGIN: main -->
<form action="{FORM_ACTION}" method="get">
		<input type="hidden" name="{NV_NAME_VARIABLE}" value="{MODULE_NAME}" />
		<input type="hidden" name="{NV_OP_VARIABLE}" value="search" />
		<input type="hidden" name="where" value="song" />
        <input name="" type="image" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/images/imuzik_01.png" class="button" id="searchIcon"/>
       <input class="txt-field" type="text" name="q" value="{KEY}" accesskey="{CHECKSESS}" id="mstxtsearch" autocomplete="off" class="searchInput has_default_text txt-field" />
</form>
<!-- END: main -->
