//==================================================
//�� �� �ߣ�fly
//�޸�ʱ�䣺2009-11-13
//�� �� �㣺������ʾ��ʾ��Ϣ�ĺ���'show_message'
//==================================================
//�� �� �ߣ�fly
//�޸�ʱ�䣺2009-11-17
//�� �� �㣺�ں���'setSendTo'������ʾ��Ӱ��Email�����Ĵ���
//==================================================

/**
 * ����: fly
 * ʱ��: 2009-11-13
 * ����: ��ʾ��ʾ��Ϣ
 * ����: exportType   ����������, 0ΪWORD, 1ΪHTML
 * ����: language     ����, 0Ϊ����, 1ΪӢ��
 */
function show_message(exportType, language) {
  var show_message = '';
  if ('0' == exportType) {
    if ('0' == language) {  //���ĵ�word����
      show_message = 'ע�� ֧��word2003�����ϰ汾';
    }
    else if ('1' == language) {  //Ӣ�ĵ�word����
      show_message = 'Note: Support Word 2003 and above';
    }

    $('#show_message').html(show_message);
  }
  else if (1 == exportType) {
    if ('0' == language) {  //���ĵ�html����
      show_message = 'ע�� ֧��IE��������ݲ�֧��firefox�����';
    }
    else if ('1' == language) {  //Ӣ�ĵ�html����
      show_message = 'Note: Support IE browser only';
    }

    $('#show_message').html(show_message);
  }
  $('#show_message').css({'display':'block','color': '#F67214'});
}
function cv_export( isEnglish,DOMAIN_MY,resumeID )
{
	if ( !window.pop ) {
		var Temp_Sel_Param = {
			openType: 2 , //���ж�λ
			filterParam: {} , //�˾�������
			createIfr:false
		}
		window.pop = new ExtZzLayer( Temp_Sel_Param );
	}
	
	var action_url = DOMAIN_MY+"/cv/cv_export.php?isEnglish="+isEnglish+"&act=select&ReSumeID="+resumeID+"&rand="+Math.random();
	
	$.get( action_url,  function(result) {
		pop.setContent( result );
		pop.setCloseNode( 'window_close' );
		pop.open();
	} );
}

function setSendTo( value )
{
  //add by fly on 2009-11-17 start
  if ('' != value) {
    $('#email').css({'display':'inline'});
  }
  else {
    $('#email').css({'display': 'none'});
  }
  //add by fly on 2009-11-17 end
	$("#email").val(value);
}

function checkExportSet( isEnglish )
{
	var ck_type = $(":radio[name=type]:checked").val();
	
	if( !ck_type )
	{
		if( isEnglish == 1 )
		{
			alert('Please select export format!');
		}
		else
		{
			alert('��ѡ�񵼳���ʽ��');
		}
		return false;
	}
	
	var ck_sendto = $("#sendto").val();
	
	if( !ck_sendto )
	{
		if( isEnglish == 1 )
		{
			alert('Please select Download Method!');
		}
		else
		{
			alert('��ѡ�����ط�ʽ��');
		}
		return false;
	}
	
	if( ck_sendto == 'mail' )
	{
		var email = $("#email").val();
		
		if( isEnglish == 1 )
		{
			if( !chkUserEmailFormat( email,'EN' ) )
			{
				return false;
			}
		}
		else
		{
			if( !chkUserEmailFormat( email,'CN' ) )
			{
				return false;
			}
		}
	}
	
	pop.close();
	return true;
}