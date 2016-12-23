var Request = function()
{
	this.getParameter = function( name )
	{
		var v_rt = '';
		var nowAddress = unescape(location.href);
		var parameters = (nowAddress.slice(nowAddress.indexOf('?')+1,nowAddress.length)).split('&');
		for(var i=0; i<parameters.length; i++)
		{
			var varName = parameters[i].split('=')[0];
			if(varName.toUpperCase() == name.toUpperCase())
			{
				v_rt = parameters[i].split('=')[1];
				break;
			}
		}
		if(v_rt == '') document.write('<div>Wrong Address. Please check.</div>')
		else document.write("<div class='entry'></div>")
	}
}