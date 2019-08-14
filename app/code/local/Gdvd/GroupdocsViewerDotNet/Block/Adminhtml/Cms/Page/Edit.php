<script>
    // Insert GroupDocs File ID at cms edit page
    function gdvdfileid() {
        var anchor = document.getElementsByTagName("a");
        // Switch the right tab
        for (var i = 0; i < anchor.length; i++) {
            if (anchor[i].className.match(/tab-item-link/) || anchor[i].className.match(/tab-item-link active/)) {
                if (anchor[i].title != "Content") {
                    anchor[i].className = "tab-item-link";
                    var tab1 = document.getElementById('page_tabs_main_section_content');
                    var tab3 = document.getElementById('page_tabs_design_section_content');
                    var tab4 = document.getElementById('page_tabs_meta_section_content');
                    tab1.style.display = 'none';
                    tab3.style.display = 'none';
                    tab4.style.display = 'none';
                } else {
                    anchor[i].className = "tab-item-link active";
                    var tab2 = document.getElementById('page_tabs_content_section_content');
                    tab2.style.display = 'block';
                    var form = document.createElement('div');
                    form.setAttribute("id", "groupdocsviewerdotnet")
                    form.innerHTML = '<form action="#" name="form">' +
                            '<label for="url">URL to installed GroupDocs Viewer .NET</label><br />' +
                            '<input type="text" name="url" value="" /><input type="checkbox" name="handler" value="true" checked>Use Http Handlers<br />' +
                            '<label for="path">Path for default file to view (Optional)</label><br />' +
                            '<input type="text" name="path" value=""><br />' +
                            '<label for="width">Width</label><br />' +
                            '<input type="text" name="width" value=""><br />' +
                            '<label for="height">Height</label><br />' +
                            '<input type="text" name="height" value=""><br />' +
                            '<input type="button" name="doRequest" value="Add Viewer" onClick="insertViewerDotNet();">' +
                            '<input type="button" name="cancel" value="Cancel" onClick="delFormDotNet()">' +
                            '</form>' +
                            '<br />' +
                            '<a target="blank" href="http://groupdocs.com/docs/display/gendoc/FAQs">See our FAQ</a> to learn how to use Comparison.';
                    tab2.appendChild(form);
                }
            }
        }
    }
</script>
<?php

class Gdvd_GroupdocsViewerDotNet_Block_Adminhtml_Cms_Page_Edit extends Mage_Adminhtml_Block_Cms_Page_Edit {

    public function __construct() {

        parent::__construct();
        $head = Mage::app()->getFrontController()
                ->getAction()
                ->getLayout()
                ->getBlock('root')
                ->getChild('head');
        $head->addJs('../app/code/local/Gdvd/GroupdocsViewerDotNet/js/insert.js');
        $this->_addButton('button_id', array(
            'label' => Mage::helper('cms')->__('Add GroupDocs Viewer .NET'),
            'onclick' => 'gdvdfileid()',
            'class' => 'go'
                ), 0, 100, 'footer', 'header');
    }

}
