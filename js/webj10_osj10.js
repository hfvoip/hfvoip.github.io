jQuery(document).ready(function($) { 
	  
	var dataModel = '';
	 var  import_stage = -1;;
 
	  
	
	
	$(".btn-memop").click(function() {
		var op = $(this).attr('data-op');
		var mem_idx = $('#memory_list').val(); 
		   /* byte 128 support */
		  var arr_send = new Uint8Array(100);
		 
	 
		if (op==2)  {
			arr_send[0] = mem_idx;
			arr_send[1] = 0x0;
			arr_send[2] = 0x0;
			arr_send[3] = $('#param_b3').val();
			arr_send[4] =  arr_send[1] ^ arr_send[2];
			arr_send[4] =  arr_send[4] ^ arr_send[3];
			arr_send[4] =  arr_send[4] ^ 0xde;
			
			arr_send[5] = $('#param_b5').val();
			arr_send[6] = $('#param_b6').val();
			arr_send[7] = 50;
			arr_send[8] = 0;
			arr_send[9] = 3;
			
			//默认值
			var blename = 'J10-2024-';
			var len_blename = blename.length;
			if (len_blename >10) len_blename = 10;
			blename = blename.substr(0,len_blename);
			for (var index =0;index<10;index++)
				arr_send[10+index] =0x0;
			//最多9个字节
			for (var index=0;index <len_blename;index++) {
				 arr_send[10+index] = blename.charCodeAt(index);
			}
			
			arr_send[20] = 5;
			arr_send[21] = 5;
			arr_send[22] = 6;
			arr_send[23] = 6;
			arr_send[24] = 6;
			arr_send[25] = 6;
			arr_send[26] = 6;
			arr_send[27] = 6;
			
			arr_send[28] = 55;
			arr_send[29] = 55;
			
			arr_send[30] = 48;
			arr_send[31] = 48;
			arr_send[32] = 48;
			arr_send[33] = 48;
			arr_send[34] = 48;
			arr_send[35] = 48;
			
			arr_send[36] = 22;
			arr_send[37] = 28;
			arr_send[38] = 30;
			arr_send[39] = 32;
		 
			arr_send[40] = 30;
			arr_send[41] = 30;
			arr_send[42] = 28;
			arr_send[43] = 26;
			
			arr_send[44] = 70;
			arr_send[45] = 70;
			arr_send[46] = 70;
			arr_send[47] = 70;
			arr_send[48] = 70;
			arr_send[49] = 70;
			
			arr_send[50] = 70;
			arr_send[51] = 70;
			
			arr_send[52] = 20;
			arr_send[53] = 20;
			arr_send[54] = 20;
			arr_send[55] = 20;
			arr_send[56] = 20;
			arr_send[57] = 20;
			arr_send[58] = 20;
			arr_send[59] = 20;
			
			arr_send[60] = 103;
			arr_send[61] = 105; 
			arr_send[62] =  110;
			arr_send[63] =  110;
			arr_send[64] =  110;
			arr_send[65] = 105;
			arr_send[66] =  103;
			arr_send[67] =  100;
			
			
			arr_send[75] = $('#param_b75').val();
			arr_send[76] = 0;
			arr_send[77] = 0;
			
			arr_send[80] = 0x0;
			arr_send[81] = 0x0; 
			arr_send[82] = 0x0; 
			arr_send[83] = 0x0; 
			arr_send[84] = 0x0; 
			arr_send[85] = 0x0; 
			arr_send[86] = 0x0; 
			arr_send[87] = 0x0; 
			
			
		
			let resetEnergyExpended = arr_send;
		  
		   try { 
		   
				  eq_characteristic.writeValue(resetEnergyExpended); 
				log('> 发送 '+arr_send.join(' '));
				  ChromeSamples.setStatus('>发送给助听器BLE');
				  alert('Reset OK ,Please click read mode config to see new values');
				
				
			}catch(error) {
					log('Argh! ' + error);
					ChromeSamples.setStatus('出错了');
			}
			 
			
		}
			 
		if (op==10) { 
			// readAppearanceValue(eq_characteristic);
			 
			 return;
		}
		if (op ==0) {
			arr_send[0] = 0xAA;
			arr_send[1] = 0;
			arr_send[2] = 0; 
			arr_send[3] = mem_idx; 
			
		}
		if  (op ==3) {
			  var arr_send = new Uint8Array(2);
			arr_send[0] = 0xAA;
			arr_send[1] = 0xA1;
			let resetEnergyExpended = arr_send;
		  
		   try { 
		   
				  eq_characteristic.writeValue(resetEnergyExpended); 
				log('> 发送 '+arr_send.join(' '));
				  ChromeSamples.setStatus('>发送给助听器BLE');
				
				
			}catch(error) {
					log('Argh! ' + error);
					ChromeSamples.setStatus('出错了');
			}
		 
		}
		if (op==4) {
		   var arr_send = new Uint8Array(4);
			arr_send[0] = 0xAA;
			arr_send[1] = 0xA0;
			arr_send[2] = 0;
			arr_send[3] = 100;
			let resetEnergyExpended = arr_send;
		  
		   try { 
		   
				  eq_characteristic.writeValue(resetEnergyExpended); 
				log('> 发送 '+arr_send.join(' '));
				  ChromeSamples.setStatus('>发送给助听器BLE');
				
				
			}catch(error) {
					log('Argh! ' + error);
					ChromeSamples.setStatus('出错了');
			}
			setTimeout("readagain()","3000"); 
			
		}
		if (op ==1) {
		 
		arr_send[0] = mem_idx;
		arr_send[1] = $('#param_b1').val();
		arr_send[2] = $('#param_b2').val();
		arr_send[3] = $('#param_b3').val();
		arr_send[4] =  arr_send[1] ^ arr_send[2];
		arr_send[4] =  arr_send[4] ^ arr_send[3];
		arr_send[4] =  arr_send[4] ^ 0xde;
		
		arr_send[5] = $('#param_b5').val();
		arr_send[6] = $('#param_b6').val();
		arr_send[7] = $('#param_b7').val();
		arr_send[8] = $('#param_b8').val();
		arr_send[9] = $('#param_b9').val();
		
		
		var blename = $('#param_blename').val();
		var len_blename = blename.length;
		//byte 128 support  10/20
		if (len_blename >10) len_blename = 10;
		blename = blename.substr(0,len_blename);
		for (var index =0;index<10;index++)
			arr_send[10+index] =0x0;
		//最多9个字节
		for (var index=0;index <len_blename;index++) {
			//在这个循环中，index 不要超过10..19
			 if (index >=10) break;
			 arr_send[10+index] = blename.charCodeAt(index);
		}
		//剩下的放在100..110
		/*
		for (var index=0;index<10;index++)
			arr_send[100+index] = 0x0;
		
		if (len_blename >10) {
			for (var index=0;index <(len_blename-10);index++) {
				 arr_send[100+index] = blename.charCodeAt(index+10);
			}
		}
		*/
		arr_send[20] = $('#param_wdrc_b20').val();
		arr_send[21] = $('#param_wdrc_b21').val();
		arr_send[22] = $('#param_wdrc_b22').val();
		arr_send[23] = $('#param_wdrc_b23').val();
		arr_send[24] = $('#param_wdrc_b24').val();
		arr_send[25] = $('#param_wdrc_b25').val();
		arr_send[26] = $('#param_wdrc_b26').val();
		arr_send[27] = $('#param_wdrc_b27').val();
		arr_send[28] = $('#param_wdrc_b28').val();
		arr_send[29] = $('#param_wdrc_b29').val();
		
		arr_send[30] = $('#param_wdrc_b30').val();
		arr_send[31] = $('#param_wdrc_b31').val();
		arr_send[32] = $('#param_wdrc_b32').val();
		arr_send[33] = $('#param_wdrc_b33').val();
		arr_send[34] = $('#param_wdrc_b34').val();
		arr_send[35] = $('#param_wdrc_b35').val();
		arr_send[36] = $('#param_wdrc_b36').val();
		arr_send[37] = $('#param_wdrc_b37').val();
		arr_send[38] = $('#param_wdrc_b38').val();
		arr_send[39] = $('#param_wdrc_b39').val();
	 
		arr_send[40] = $('#param_wdrc_b40').val();
		arr_send[41] = $('#param_wdrc_b41').val();
		arr_send[42] = $('#param_wdrc_b42').val();
		arr_send[43] = $('#param_wdrc_b43').val();
		arr_send[44] = $('#param_wdrc_b44').val();
		arr_send[45] = $('#param_wdrc_b45').val();
		arr_send[46] = $('#param_wdrc_b46').val();
		arr_send[47] = $('#param_wdrc_b47').val();
		arr_send[48] = $('#param_wdrc_b48').val();
		arr_send[49] = $('#param_wdrc_b49').val();
		
		arr_send[50] = $('#param_wdrc_b50').val();
		arr_send[51] = $('#param_wdrc_b51').val();
		arr_send[52] = $('#param_wdrc_b52').val();
		arr_send[53] = $('#param_wdrc_b53').val();
		arr_send[54] = $('#param_wdrc_b54').val();
		arr_send[55] = $('#param_wdrc_b55').val();
		arr_send[56] = $('#param_wdrc_b56').val();
		arr_send[57] = $('#param_wdrc_b57').val();
		arr_send[58] = $('#param_wdrc_b58').val();
		arr_send[59] = $('#param_wdrc_b59').val();
		
		arr_send[60] = $('#param_wdrc_b60').val();
		arr_send[61] = $('#param_wdrc_b61').val();
		arr_send[62] = $('#param_wdrc_b62').val();
		arr_send[63] = $('#param_wdrc_b63').val();
		arr_send[64] = $('#param_wdrc_b64').val();
		arr_send[65] = $('#param_wdrc_b65').val();
		arr_send[66] = $('#param_wdrc_b66').val();
		arr_send[67] = $('#param_wdrc_b67').val();
		
		arr_send[70] = $('#param_b70').val();
		arr_send[71] = $('#param_b71').val();
		arr_send[72] = $('#param_b72').val();
		arr_send[73] = $('#param_b73').val();
		
		arr_send[74] = $('#param_b74').val();
		arr_send[75] = $('#param_b75').val();
		 arr_send[76] = 0;
		 arr_send[77] = 0; 
		
	    arr_send[80] = $('#param_eq_b80').val();
		arr_send[81] = $('#param_eq_b81').val();
		arr_send[82] = $('#param_eq_b82').val();
		arr_send[83] = $('#param_eq_b83').val();
		arr_send[84] = $('#param_eq_b84').val();
		arr_send[85] = $('#param_eq_b85').val();
		arr_send[86] = $('#param_eq_b86').val();
		arr_send[87] = $('#param_eq_b87').val();
		
		 arr_send[90] = 0;
		 arr_send[91] = 0; 
		arr_send[92] = $('#param_b92').val();
		
		
		
		let resetEnergyExpended = arr_send;
		  
		   try { 
		   
				  eq_characteristic.writeValue(resetEnergyExpended); 
				log('> 发送 '+arr_send.join(' '));
				  ChromeSamples.setStatus('>发送给助听器BLE');
				
				
			}catch(error) {
					log('Argh! ' + error);
					ChromeSamples.setStatus('出错了');
			}
		 
		}
		
		if (op ==0)  
			log('切换MEM后需手动点Read Mode Config，以便读取新MEM数据');
			 
		 
		
	});

	 
	$('#memory_list').change( function() {
		 
		var mem_idx = $('#memory_list').val();
	 
		
		   var arr_send = new Uint8Array(4);
		  arr_send[0] = 0xAA;
		  arr_send[1] = 0x0;
		  arr_send[2] = 0x0;
		  
		  arr_send[3] = parseInt(mem_idx);
		 
		  let resetEnergyExpended = arr_send;
		  
		   try { 
		   
				eq_characteristic.writeValue(resetEnergyExpended); 
				log('> 发送 '+arr_send.join(' '));
				ChromeSamples.setStatus('>发送给助听器BLE'); 
				
			}catch(error) {
					log('Argh! ' + error);
					ChromeSamples.setStatus('出错了');
			}
			
			setTimeout("readagain()","3000"); 
	 
		
		
	});
	$('.btn-read').click(function() {
		readagain();
		
	});
	
	$('button.btn-ptmode').click( function() {
		 
		var op = $(this).data('op');
		var freq = $('#pt_freq').val();
		var gain = $('#pt_gain').val();
		 
		
		  var arr_send = new Uint8Array(7);
		  
		  if (op==1) {
		  arr_send[0] = 0xAA;
		  arr_send[1] =  0xAB;
		  arr_send[2] =   3;
		  arr_send[3] = 0;
		  arr_send[4] = freq /256;
		  arr_send[5] =freq % 256;
		  arr_send[6] = gain; 
		  } else {
			    arr_send[0] = 0xAA;
			  arr_send[1] =  0xAB;
			  arr_send[2] =   3;
			  arr_send[3] = 0;
			  arr_send[4] = 0 ;
			  arr_send[5] = 0 ;
			  arr_send[6] = 0; 
			  
		  }
		  let resetEnergyExpended = arr_send;
		  
		   try { 
				log('> 发送 '+arr_send.join(' '));
				eq_characteristic.writeValue(resetEnergyExpended); 
				
				ChromeSamples.setStatus('>发送给助听器BLE'); 
				
			}catch(error) {
					log('Argh! ' + error);
					ChromeSamples.setStatus('出错了');
			}
		 
			return false;

		
	});
	$('button.btn-i2csend').click( function() {
		 
		var op = $(this).data('op');
		var i2cdata = $('#i2c_senddata').val();
	 
		 
		
		  var arr_send = new Uint8Array(4);
		  
		   
		  arr_send[0] = 0xAA;
		  arr_send[1] =  0xB0;
		  arr_send[2] =   0x00;
		  arr_send[3] = i2cdata;
		  
		  
		  let resetEnergyExpended = arr_send;
		  
		   try { 
				log('> 发送 '+arr_send.join(' '));
				eq_characteristic.writeValue(resetEnergyExpended); 
				
				ChromeSamples.setStatus('>发送给助听器BLE'); 
				
			}catch(error) {
					log('Argh! ' + error);
					ChromeSamples.setStatus('出错了');
			}
			//防止 a的事件继续冒泡
			return false;

		
	});
	
	$('button.btn-noisefit').click(function(){
		var gain = $(this).data('gain');
		gain = parseInt(gain);
		var b28 = $('#param_wdrc_b28').val();
	
		var b29 = $('#param_wdrc_b29').val();
		var b30 = $('#param_wdrc_b30').val();
		var b31 = $('#param_wdrc_b31').val();
		var b32 = $('#param_wdrc_b32').val();
		var b33 = $('#param_wdrc_b33').val();
		var b34 = $('#param_wdrc_b34').val();
		var b35 = $('#param_wdrc_b35').val();
		b28 = parseInt(b28);
		b29 = parseInt(b29);
		b30 = parseInt(b30);
		b31 = parseInt(b31);
		b32 = parseInt(b32);
		b33 = parseInt(b33);
		b34 = parseInt(b34);
		b35 = parseInt(b35);
 
		b28 = gain+b28;
		if (b28<0) return false;
		
		b29 = gain+b29;
		if (b29<0) return false;
		b30 = gain+b30;
		if (b30 <0) return false;
		b31 = gain+b31;
		if (b31 <0) return false;
		b32 = gain+b32;
		if (b32<0) return false;
		b33 = gain+b33;
		if (b33 <0) return false;
		b34 = gain+b34;
		if (b34<0) return false;
		b35 = gain + b35;
		if (b35 <0) return false;
		console.log(b28+' /'+b29+' /'+b30+' /'+b31+' /'+b32+' /' +b33+' /'+b34+'/ '+b35);
		$('#param_wdrc_b28').val(b28);
		$('#param_wdrc_b29').val(b29);
		$('#param_wdrc_b30').val(b30);
		$('#param_wdrc_b31').val(b31);
		$('#param_wdrc_b32').val(b32);
		$('#param_wdrc_b33').val(b33);
		$('#param_wdrc_b34').val(b34);
		$('#param_wdrc_b35').val(b35); 
		alert('please click save mode config to write to hearing aid');
		//防止 a的事件继续冒泡
		return false;
	
	} );
	 
	
		$('button.btn-fotamode').click( function() {
		 
		
		  var arr_send = new Uint8Array(4);
		  
		  
		  arr_send[0] = 0xAA;
		  arr_send[1] =  0xCD;
		  arr_send[2] =   0xCD;
		  arr_send[3] = 0xCD;
		  
		   
		  let resetEnergyExpended = arr_send;
		  
		   try { 
				log('> 发送 '+arr_send.join(' '));
				eq_characteristic.writeValue(resetEnergyExpended); 
				
				ChromeSamples.setStatus('>发送给助听器BLE'); 
				
			}catch(error) {
					log('Argh! ' + error);
					ChromeSamples.setStatus('出错了');
			}
			//防止 a的事件继续冒泡
			return false;

		
	});
	 
	
	
	
	 
	
	 
	
	 			
 
  }); 
 