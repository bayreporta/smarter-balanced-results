var stackedColumnChart = {
	vars:{
		label:[],
		w:null,
		h:null,
		m:{},
		contain:null,
		xaxisLabel:null,
		yaxisLabel:null,
		tickFormat:null,
		ticks:null,
		path:null,
		color:null,
		padding:null,
		sort:false,
		items:null,
		title:null,
		subhed:null,
		source:null,
		data:null,
		chart:null,
		legend:null
	},
	getAttr: function(p, path, contain, w, h, m, color, items, sort, xlabel, ylabel, tF, tick, pad, title, subhed, source, data, chart, legend){
		p.w = parseInt(w)// - m[1] - m[3];
		p.h = parseInt(h)// - m[0] - m[2];
		p.m = {
			top:m[0],
			right:m[1],
			bottom:m[2],
			left:m[3]
		};
		p.path = path;
		p.contain = '#' + contain;
		p.xaxisLabel = xlabel;
		p.yaxisLabel = ylabel;
		p.tickFormat = tF;
		p.ticks = tick;
		p.color = color[items];
		p.padding = pad;
		p.sort = sort;
		p.title = title;
		p.subhed = subhed;
		p.source = source;

		p.data = data;
		p.chart = chart;
		p.legend = legend;
		stackedColumnChart.drawChart(stackedColumnChart.vars, p.data);

	},
	processData: function(d, c){
		var tempData = new Array();
		var loc = 0;
		switch(c){
			case 0: //OVERALL ALL STUDENTS
				tempData[0] = new Object();
				tempData[0]['xlabel'] = 'English'; 
				tempData[0]['Standard Not Met'] = parseFloat(d.pct_standard_not_met_eng);
				tempData[0]['Standard Nearly Met'] = parseFloat(d.pct_standard_nearly_met_eng);
				tempData[0]['Standard Met'] = parseFloat(d.pct_standard_met_eng);		
				tempData[0]['Standard Exceeded'] = parseFloat(d.pct_standard_exceeded_eng);

				tempData[1] = new Object();
				tempData[1]['xlabel'] = 'Math';
				tempData[1]['Standard Not Met'] = parseFloat(d.pct_standard_not_met_math);	
				tempData[1]['Standard Nearly Met'] = parseFloat(d.pct_standard_nearly_met_math);	
				tempData[1]['Standard Met'] = parseFloat(d.pct_standard_met_math);				
				tempData[1]['Standard Exceeded'] = parseFloat(d.pct_standard_exceeded_math);
				break;
			case 1: //OVERALL GRADES ENGLISH
				if (d.check_3rd_eng === 'TRUE'){
					tempData[loc] = new Object();
					tempData[loc]['xlabel'] = 'Grade 3'; 
					tempData[loc]['Standard Not Met'] = parseFloat(d.grade3_eng_lvl1);
	            	tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade3_eng_lvl2);
	           	 	tempData[loc]['Standard Met'] = parseFloat(d.grade3_eng_lvl3);
	           		tempData[loc]['Standard Exceeded'] = parseFloat(d.grade3_eng_lvl4);
					loc ++;
				}
				
				
				if (d.check_4th_eng === 'TRUE'){
					tempData[loc] = new Object();
					tempData[loc]['xlabel'] = 'Grade 4'; 
					tempData[loc]['Standard Not Met'] = parseFloat(d.grade4_eng_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade4_eng_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade4_eng_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade4_eng_lvl4);
					loc ++;
				}
				
				
				if (d.check_5th_eng === 'TRUE'){
					tempData[loc] = new Object();
					tempData[loc]['xlabel'] = 'Grade 5'; 
					tempData[loc]['Standard Not Met'] = parseFloat(d.grade5_eng_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade5_eng_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade5_eng_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade5_eng_lvl4);
					loc ++;	
				}
				
				
				if (d.check_6th_eng === 'TRUE'){
					tempData[loc] = new Object();
					tempData[loc]['xlabel'] = 'Grade 6'; 
					tempData[loc]['Standard Not Met'] = parseFloat(d.grade6_eng_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade6_eng_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade6_eng_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade6_eng_lvl4);
					loc ++;
				}
				
				
				if (d.check_7th_eng === 'TRUE'){
					tempData[loc] = new Object();
					tempData[loc]['xlabel'] = 'Grade 7'; 
					tempData[loc]['Standard Not Met'] = parseFloat(d.grade7_eng_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade7_eng_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade7_eng_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade7_eng_lvl4);
					loc ++;	
				}
				
				
				if (d.check_8th_eng === 'TRUE'){
					tempData[loc] = new Object();
					tempData[loc]['xlabel'] = 'Grade 8'; 
					tempData[loc]['Standard Not Met'] = parseFloat(d.grade8_eng_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade8_eng_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade8_eng_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade8_eng_lvl4);
					loc ++;
				}
				
				
				if (d.check_11th_eng === 'TRUE'){
					tempData[loc] = new Object();
					tempData[loc]['xlabel'] = 'Grade 11'; 
					tempData[loc]['Standard Not Met'] = parseFloat(d.grade11_eng_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade11_eng_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade11_eng_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade11_eng_lvl4);
					loc ++;
				}
				
				break;
			case 2: //OVERALL GRADES MATH
				if (d.check_3rd_math === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Grade 3'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.grade3_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade3_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade3_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade3_math_lvl4);
                    loc ++;
                }
                
                
                if (d.check_4th_math=== 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Grade 4'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.grade4_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade4_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade4_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade4_math_lvl4);
                    loc ++;
                }
                
                
                if (d.check_5th_math === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Grade 5'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.grade5_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade5_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade5_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade5_math_lvl4);
                    loc ++; 
                }
                
                
                if (d.check_6th_math === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Grade 6'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.grade6_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade6_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade6_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade6_math_lvl4);
                    loc ++;
                }
                
                
                if (d.check_7th_math === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Grade 7';                 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.grade7_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade7_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade7_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade7_math_lvl4);
                    loc ++; 

                }
                
                
                if (d.check_8th_math === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Grade 8'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.grade8_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade8_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade8_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade8_math_lvl4);
                    loc ++;
                }
                
                
                if (d.check_11th_math === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Grade 11'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.grade11_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.grade11_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.grade11_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.grade11_math_lvl4);
                    loc ++;
                }
				
				break;
			case 3: // RACE AND ETHNICITY ENGLISH
				if (d.check_white === 'TRUE'){
	                tempData[loc] = new Object();
	                tempData[loc]['xlabel'] = 'White'; 
	                tempData[loc]['Standard Not Met'] = parseFloat(d.white_eng_lvl1);
	                tempData[loc]['Standard Nearly Met'] = parseFloat(d.white_eng_lvl2);
	                tempData[loc]['Standard Met'] = parseFloat(d.white_eng_lvl3);
	                tempData[loc]['Standard Exceeded'] = parseFloat(d.white_eng_lvl4);
	                loc ++;
	            }

           		if (d.check_black === 'TRUE'){
	                tempData[loc] = new Object();
	                tempData[loc]['xlabel'] = 'African American'; 
	                tempData[loc]['Standard Not Met'] = parseFloat(d.black_eng_lvl1);
	                tempData[loc]['Standard Nearly Met'] = parseFloat(d.black_eng_lvl2);
	                tempData[loc]['Standard Met'] = parseFloat(d.black_eng_lvl3);
	                tempData[loc]['Standard Exceeded'] = parseFloat(d.black_eng_lvl4);
	                loc ++;
	            }
	            if (d.check_aian === 'TRUE'){
	                tempData[loc] = new Object();
	                tempData[loc]['xlabel'] = 'Amer Ind Alk Native'; 
	                tempData[loc]['Standard Not Met'] = parseFloat(d.aian_eng_lvl1);
	                tempData[loc]['Standard Nearly Met'] = parseFloat(d.aian_eng_lvl2);
	                tempData[loc]['Standard Met'] = parseFloat(d.aian_eng_lvl3);
	                tempData[loc]['Standard Exceeded'] = parseFloat(d.aian_eng_lvl4);
	                loc ++;
	            }
	            if (d.check_asian === 'TRUE'){
	                tempData[loc] = new Object();
	                tempData[loc]['xlabel'] = 'Asian'; 
	                tempData[loc]['Standard Not Met'] = parseFloat(d.asian_eng_lvl1);
	                tempData[loc]['Standard Nearly Met'] = parseFloat(d.asian_eng_lvl2);
	                tempData[loc]['Standard Met'] = parseFloat(d.asian_eng_lvl3);
	                tempData[loc]['Standard Exceeded'] = parseFloat(d.asian_eng_lvl4);
	                loc ++;
	            }
	            if (d.check_filipino === 'TRUE'){
	                tempData[loc] = new Object();
	                tempData[loc]['xlabel'] = 'Filipino'; 
	                tempData[loc]['Standard Not Met'] = parseFloat(d.filipino_eng_lvl1);
	                tempData[loc]['Standard Nearly Met'] = parseFloat(d.filipino_eng_lvl2);
	                tempData[loc]['Standard Met'] = parseFloat(d.filipino_eng_lvl3);
	                tempData[loc]['Standard Exceeded'] = parseFloat(d.filipino_eng_lvl4);
	                loc ++;
	            }
	            if (d.check_pi === 'TRUE'){
	                tempData[loc] = new Object();
	                tempData[loc]['xlabel'] = 'Pacific Islander'; 
	                tempData[loc]['Standard Not Met'] = parseFloat(d.pi_eng_lvl1);
	                tempData[loc]['Standard Nearly Met'] = parseFloat(d.pi_eng_lvl2);
	                tempData[loc]['Standard Met'] = parseFloat(d.pi_eng_lvl3);
	                tempData[loc]['Standard Exceeded'] = parseFloat(d.pi_eng_lvl4);
		            loc ++;
	            }
	            if (d.check_hisp === 'TRUE'){
	                tempData[loc] = new Object();
	                tempData[loc]['xlabel'] = 'Hispanic'; 
	                tempData[loc]['Standard Not Met'] = parseFloat(d.hisp_eng_lvl1);
	                tempData[loc]['Standard Nearly Met'] = parseFloat(d.hisp_eng_lvl2);
	                tempData[loc]['Standard Met'] = parseFloat(d.hisp_eng_lvl3);
	                tempData[loc]['Standard Exceeded'] = parseFloat(d.hisp_eng_lvl4);
	                loc ++;
	            }
                             
                
                break;
     	    case 4: // RACE AND ETHNICITY MATH
                if (d.check_white === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'White'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.white_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.white_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.white_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.white_math_lvl4);
                    loc ++;
                }

                if (d.check_black === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'African American'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.black_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.black_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.black_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.black_math_lvl4);
                    loc ++;
                }
                if (d.check_aian === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Amer Ind Alk Native'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.aian_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.aian_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.aian_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.aian_math_lvl4);
                    loc ++;
                }
                if (d.check_asian === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Asian'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.asian_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.asian_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.asian_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.asian_math_lvl4);
                    loc ++;
                }
                if (d.check_filipino === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Filipino'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.filipino_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.filipino_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.filipino_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.filipino_math_lvl4);
                    loc ++;
                }
                if (d.check_pi === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Pacific Islander'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.pi_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.pi_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.pi_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.pi_math_lvl4);
                    loc ++;
                }
                if (d.check_hisp === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'Hispanic'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.hisp_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.hisp_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.hisp_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.hisp_math_lvl4);
                    loc ++;
                }
                
                break;
			case 5: // GENDER ENGLISH
	            tempData[0] = new Object();
	            tempData[0]['xlabel'] = 'Male'; 
	            tempData[0]['Standard Not Met'] = parseFloat(d.male_eng_lvl_1);
	            tempData[0]['Standard Nearly Met'] = parseFloat(d.male_eng_lvl_2);
	            tempData[0]['Standard Met'] = parseFloat(d.male_eng_lvl_3);
	            tempData[0]['Standard Exceeded'] = parseFloat(d.male_eng_lvl_4);
	            

	            tempData[1] = new Object();
	            tempData[1]['xlabel'] = 'Female'; 
	            tempData[1]['Standard Not Met'] = parseFloat(d.female_eng_lvl1);
	            tempData[1]['Standard Nearly Met'] = parseFloat(d.female_eng_lvl2);
	            tempData[1]['Standard Met'] = parseFloat(d.female_eng_lvl3);
	            tempData[1]['Standard Exceeded'] = parseFloat(d.female_eng_lvl4);
	            
	            break;
	    	case 6: // GENDER MATH
	            tempData[0] = new Object();
	            tempData[0]['xlabel'] = 'Male'; 
	            tempData[0]['Standard Not Met'] = parseFloat(d.male_math_lvl1);
	            tempData[0]['Standard Nearly Met'] = parseFloat(d.male_math_lvl2);
	            tempData[0]['Standard Met'] = parseFloat(d.male_math_lvl3);
	            tempData[0]['Standard Exceeded'] = parseFloat(d.male_math_lvl4);
	            

	            tempData[1] = new Object();
	            tempData[1]['xlabel'] = 'Female'; 
	            tempData[1]['Standard Not Met'] = parseFloat(d.female_math_lvl1);
	            tempData[1]['Standard Nearly Met'] = parseFloat(d.female_math_lvl2);
	            tempData[1]['Standard Met'] = parseFloat(d.female_math_lvl3);
	            tempData[1]['Standard Exceeded'] = parseFloat(d.female_math_lvl4);
	            
	            break;
            case 7:
            	if (d.check_ed === 'TRUE'){
                    tempData[loc] = new Object();
                     tempData[loc]['xlabel'] = 'Economically Disadvantaged'; 
		            tempData[loc]['Standard Not Met'] = parseFloat(d.ed_eng_lvl_1);
		            tempData[loc]['Standard Nearly Met'] = parseFloat(d.ed_eng_lvl_2);
		            tempData[loc]['Standard Met'] = parseFloat(d.ed_eng_lvl_3);
		            tempData[loc]['Standard Exceeded'] = parseFloat(d.ed_eng_lvl_4);
                    loc ++;
                }

                if (d.check_el === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'English Learner'; 
		            tempData[loc]['Standard Not Met'] = parseFloat(d.el_eng_lvl1);
		            tempData[loc]['Standard Nearly Met'] = parseFloat(d.el_eng_lvl2);
		            tempData[loc]['Standard Met'] = parseFloat(d.el_eng_lvl3);
		            tempData[loc]['Standard Exceeded'] = parseFloat(d.el_eng_lvl4);
                    loc ++;
                }
        
	            
	            
	            break;
            case 8:
            	if (d.check_ed === 'TRUE'){
                    tempData[loc] = new Object();
                     tempData[loc]['xlabel'] = 'Economically Disadvantaged'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.ed_math_lvl_1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.ed_math_lvl_2);
                    tempData[loc]['Standard Met'] = parseFloat(d.ed_math_lvl_3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.ed_math_lvl_4);
                    loc ++;
                }
                
                if (d.check_el === 'TRUE'){
                    tempData[loc] = new Object();
                    tempData[loc]['xlabel'] = 'English Learner'; 
                    tempData[loc]['Standard Not Met'] = parseFloat(d.el_math_lvl1);
                    tempData[loc]['Standard Nearly Met'] = parseFloat(d.el_math_lvl2);
                    tempData[loc]['Standard Met'] = parseFloat(d.el_math_lvl3);
                    tempData[loc]['Standard Exceeded'] = parseFloat(d.el_math_lvl4);
                    loc ++;
                }
	            
	            break;
			case 11: // STATE GRADE 3 ENGLISH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].english_3rd);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].english_3rd);

                }           
                break;
            case 12: // STATE GRADE 4 ENGLISH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].english_4th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].english_4th);

                }           
                break;
            case 13: // STATE GRADE 5 ENGLISH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].english_5th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].english_5th);

                }           
                break;
            case 14: // STATE GRADE 6 ENGLISH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].english_6th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].english_6th);

                }           
                break;
            case 15: // STATE GRADE 7 ENGLISH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].english_7th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].english_7th);

                }           
                break;
            case 16: // STATE GRADE 8 ENGLISH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].english_8th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].english_8th);

                }           
                break;
            case 17: // STATE GRADE 11 ENGLISH
                var index;
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].english_11th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].english_11th);
                    
                    if (d[i].stateAbbr === 'Missouri'){
                        index = i;
                    }   


                }       
                if (index > -1){tempData.splice(index, 1);} 

                break;            
            case 21: // STATE GRADE 3 MATH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].math_3rd);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].math_3rd);

                }           
                break;
            case 22: // STATE GRADE 4 MATH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].math_4th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].math_4th);

                }           
                break;
            case 23: // STATE GRADE 5 MATH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].math_5th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].math_5th);

                }           
                break;
            case 24: // STATE GRADE 6 MATH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].math_6th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].math_6th);

                }           
                break;
            case 25: // STATE GRADE 7 MATH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].math_7th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].math_7th);

                }           
                break;
            case 26: // STATE GRADE 8 MATH
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].math_8th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].math_8th);

                }           
                break;
            case 27: // STATE GRADE 11 MATH
                var index;
                for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].stateAbbr; 
                    tempData[i]['Level 2 or Lower'] = 1 - parseFloat(d[i].math_11th);
                    tempData[i]['Level 3 or Higher'] = parseFloat(d[i].math_11th);
                    
                    if (d[i].stateAbbr === 'Missouri'){
                        index = i;
                    }   


                }       
                if (index > -1){tempData.splice(index, 1);}         
                break;
            case 100: //TOP 100 ENG DISTRICTS
            	for (var i = 0; i < d.length ; i++){
                    tempData[i] = new Object();
                    tempData[i]['xlabel'] = d[i].entity_name; 
                    tempData[i]['Standard Not Met'] =  parseFloat(d[i].pct_standard_not_met_eng);
                    tempData[i]['Standard Nealry Met'] = parseFloat(d[i].pct_standard_nearly_met_eng);
                    tempData[i]['Standard Met or Exceeded'] = parseFloat(d[i].pct_standard_met_or_exceeded_eng);
                    
                }           
                break;


		}
		return tempData;
	},
	drawChart: function(p, data){
		/* PROCESS DATA FOR CHART OF CHOICE
		==========================================*/
		data = stackedColumnChart.processData(data, p.chart)

		/* SCALE
		==========================*/
		var xScale = d3.scale.ordinal().rangeRoundBands([0, p.w - 30], p.padding);
		var yScale = d3.scale.linear().rangeRound([p.h, 0]);

		/* COLOR
		==========================*/
		var color = d3.scale.ordinal().range(p.color);

		/* AXES
		==========================*/
		var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
		var yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(p.tick).tickFormat(d3.format(p.tickFormat));

		/* CHART
		==========================*/
		var chart = d3.select(p.contain).append('svg').classed('s_c_p', true).attr('width', p.w).attr('height', p.h)
					.append('g').attr('transform', 'translate('+ p.m.left +','+ p.m.top + ')');

		/* DATA AND DRAW
		===============================================================================*/
		color.domain(d3.keys(data[0]).filter(function(key){ return key !== 'xlabel'}));
		
		/* MAPS Y POS FOR SEGMENTS
		====================================*/
		data.forEach(function(d){
			var y0 = 0;
			d.seg = color.domain().map(function(name){return {name:name, y0:y0, y1: y0 += +d[name]}; })
			d.seg.forEach(function(d) {d.y0 /= y0; d.y1 /= y0;});

		})
		/* SORT
		====================================*/
		if (p.sort == true){data.sort(function(a,b) {return b.seg[0].y1 - a.seg[0].y1;})}

		/* MAP X COLUMNS
		====================================*/
		xScale.domain(data.map(function(d){ return d.xlabel;}));

		/* DRAW AXES
		====================================*/
		chart.append('g').attr('class', 'xaxis').attr('transform', 'translate(0,' + p.h + ')').call(xAxis)
			.selectAll(".tick text").call(stackedColumnChart.wrapLabels, xScale.rangeBand());
		chart.append('g').attr('class', 'yaxis').call(yAxis);

		/* TOOLTIP
		====================================*/
		var tip = d3.tip().html(function(d) { 
			jQuery('.n').addClass('d3-tip');
			if (p.tickFormat == '.0%'){
				return (d.name + '<br>' + Math.round((d.y1 - d.y0)*100) + '%');
			}
			
		});
		chart.call(tip);

		/* DRAW COLUMNS
		====================================*/
		var items = chart.selectAll('.xitem').data(data).enter()
					.append('g').attr('class','xitem').attr('transform', function(d){return 'translate(' + xScale(d.xlabel) + ',0)';});

		items.selectAll('rect').data(function(d) {return d.seg;}).enter().append('rect')
			.attr('width', xScale.rangeBand()).attr('y', function(d) {return yScale(d.y1);}).attr('height', function(d) {return yScale(d.y0) - yScale(d.y1); }).style('fill', function(d){return color(d.name);})
			.on('mouseover', tip.show).on('mouseout', tip.hide);


		/* ADJUST SVG
		====================================*/
		jQuery(p.contain + ' svg').attr('height', p.h+(p.m.top * 2));
		var svgg = jQuery(p.contain + ' svg').attr('height');		

		stackedColumnChart.addMeta(p, data);
	},
	addMeta:function(p, data){
		if (p.legend == true){
			/* ADD LEGEND DETAILS
			=================================*/
			jQuery(p.contain).prepend('<div id="legend"></div>');
			
			for (var i = 0 ; i < data[0].seg.length ; i++){
				jQuery(p.contain + ' #legend').append('<div class="legend-item"><div></div><p>'+ data[0].seg[i].name+'</p></div>');
				jQuery(p.contain + ' .legend-item>div:eq('+i+')').css({'background-color':p.color[i]})
			}

			/* STYLES
			=================================*/
			jQuery(p.contain + ' #legend').css({'overflow':'hidden', 'margin':'20px 0'});
			jQuery(p.contain + ' .legend-item').css({'float':'left','overflow':'hidden', 'margin':'0 15px 20px 0'});
			jQuery(p.contain + ' .legend-item>div').css({'width':'30px','height':'30px','float':'left'});
			jQuery(p.contain + ' .legend-item p').css({'font-size':'.9em','color':'#333','float': 'right', 'margin': '0 0 0 10px'});
		}
		

		if (p.subhed != null){

			/* ADD META DETAILS
			=================================*/
			jQuery(p.contain).prepend('<div id="meta"></div>');
			if (p.legend == true) {jQuery(p.contain + ' #meta').detach().insertAfter(p.contain + ' #legend');}
			jQuery(p.contain + ' #meta').append('<h2>'+p.subhed+'</h2>');
			if (p.source !== null){jQuery(p.contain + ' #meta').append('<p>'+p.source+'</p>');}


			
			jQuery(p.contain + ' #meta h2').css({'margin':0,'font-size':'1em','color':'#aaa'});
			jQuery(p.contain + ' #meta p').css({'text-align': 'center','font-style': 'italic','font-size': '1em'});
		}
		
	},
	wrapLabels: function(text, width){
		text.each(function() {
		    var text = d3.select(this),
		        words = text.text().split(/\s+/).reverse(),
		        word,
		        line = [],
		        lineNumber = 0,
		        lineHeight = 1.1, // ems
		        y = text.attr("y"),
		        dy = parseFloat(text.attr("dy")),
		        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
		    while (word = words.pop()) {
		      line.push(word);
		      tspan.text(line.join(" "));
		      if (tspan.node().getComputedTextLength() > width) {
		        line.pop();
		        tspan.text(line.join(" "));
		        line = [word];
		        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
		      }
		    }
		  });
	}
}