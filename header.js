/**
 * @fileOverview 
 * @author  
 */
KISSY.add(function (S) {
    // your code here
    function Header(){
    	var self=this;
    	self._init();
    }

    S.augment(Header,{
    	_init:function(){
    		var _self=this;
    		alert('This is a test');
    	}
    });

    return Header;
});