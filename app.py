import csv
import json
from flask import Flask
from flask import render_template
app = Flask(__name__)

## GET CSV ##
def get_csv(path):
	#headers = ['grade3_eng_lvl4',	'grade3_eng_lvl3',	'grade3_eng_lvl2',	'grade3_eng_lvl1',	'grade4_eng_lvl4',	'grade4_eng_lvl3',	'grade4_eng_lvl2',	'grade4_eng_lvl1',	'grade5_eng_lvl4',	'grade5_eng_lvl3',	'grade5_eng_lvl2',	'grade5_eng_lvl1',	'grade6_eng_lvl4',	'grade6_eng_lvl3',	'grade6_eng_lvl2',	'grade6_eng_lvl1',	'grade7_eng_lvl4',	'grade7_eng_lvl3',	'grade7_eng_lvl2',	'grade7_eng_lvl1',	'grade8_eng_lvl4',	'grade8_eng_lvl3',	'grade8_eng_lvl2',	'grade8_eng_lvl1',	'grade11_eng_lvl4',	'grade11_eng_lvl3',	'grade11_eng_lvl2',	'grade11_eng_lvl1',	'pct_standard_exceeded_eng',	'pct_standard_met_eng',	'pct_standard_met_or_exceeded_eng',	'pct_standard_nearly_met_eng',	'pct_standard_not_met_eng',	'grade3_math_lvl4',	'grade3_math_lvl3',	'grade3_math_lvl2',	'grade3_math_lvl1',	'grade4_math_lvl4',	'grade4_math_lvl3',	'grade4_math_lvl2',	'grade4_math_lvl1',	'grade5_math_lvl4',	'grade5_math_lvl3',	'grade5_math_lvl2',	'grade5_math_lvl1',	'grade6_math_lvl4',	'grade6_math_lvl3',	'grade6_math_lvl2',	'grade6_math_lvl1',	'grade7_math_lvl4',	'grade7_math_lvl3',	'grade7_math_lvl2',	'grade7_math_lvl1',	'grade8_math_lvl4',	'grade8_math_lvl3',	'grade8_math_lvl2',	'grade8_math_lvl1',	'grade11_math_lvl4',	'grade11_math_lvl3',	'grade11_math_lvl2',	'grade11_math_lvl1',	'total_students_tested',	'pct_standard_exceeded_math',	'pct_standard_met_math',	'pct_standard_met_or_exceeded_math',	'pct_standard_nearly_met_math',	'pct_standard_not_met_math',	'check_all',	'check_gender',	'check_race',	'check_white',	'check_black',	'check_aian',	'check_asian',	'check_filipino',	'check_hisp',	'check_pi',	'check_needs',	'check_ed',	'check_el',	'check_all_eng',	'check_3rd_eng',	'check_4th_eng',	'check_5th_eng',	'check_6th_eng',	'check_7th_eng',	'check_8th_eng',	'check_11th_eng',	'check_all_math',	'check_3rd_math',	'check_4th_math',	'check_5th_math',	'check_6th_math',	'check_7th_math',	'check_8th_math',	'check_11th_math',	'male_eng_lvl_4',	'male_eng_lvl_3',	'male_eng_lvl_3_4',	'male_eng_lvl_2',	'male_eng_lvl_1',	'female_eng_lvl4',	'female_eng_lvl3',	'female_eng_lvl3_4',	'female_eng_lvl2',	'female_eng_lvl1',	'female_math_lvl4',	'female_math_lvl3',	'female_math_lvl3_4',	'female_math_lvl2',	'female_math_lvl1',	'male_math_lvl4',	'male_math_lvl3',	'male_math_lvl_3_4',	'male_math_lvl2',	'male_math_lvl1',	'black_eng_lvl4',	'black_eng_lvl3',	'black_eng_lvl3_4',	'black_eng_lvl2',	'black_eng_lvl1',	'aian_eng_lvl4',	'aian_eng_lvl3',	'aian_eng_lvl3_4',	'aian_eng_lvl2',	'aian_eng_lvl1',	'asian_eng_lvl4',	'asian_eng_lvl3',	'asian_eng_lvl3_4',	'asian_eng_lvl2',	'asian_eng_lvl1',	'filipino_eng_lvl4',	'filipino_eng_lvl3',	'filipino_eng_lvl3_4',	'filipino_eng_lvl2',	'filipino_eng_lvl1',	'hisp_eng_lvl4',	'hisp_eng_lvl3',	'hisp_eng_lvl3_4',	'hisp_eng_lvl2',	'hisp_eng_lvl1',	'pi_eng_lvl4',	'pi_eng_lvl3',	'pi_eng_lvl3_4',	'pi_eng_lvl2',	'pi_eng_lvl1',	'white_eng_lvl4',	'white_eng_lvl3',	'white_eng_lvl3_4',	'white_eng_lvl2',	'white_eng_lvl1',	'black_math_lvl4',	'black_math_lvl3',	'black_math_lvl3_4',	'black_math_lvl2',	'black_math_lvl1',	'aian_math_lvl4',	'aian_math_lvl3',	'aian_math_lvl3_4',	'aian_math_lvl2',	'aian_math_lvl1',	'asian_math_lvl4',	'asian_math_lvl3',	'asian_math_lvl3_4',	'asian_math_lvl2',	'asian_math_lvl1',	'filipino_math_lvl4',	'filipino_math_lvl3',	'filipino_math_lvl3_4',	'filipino_math_lvl2',	'filipino_math_lvl1',	'hisp_math_lvl4',	'hisp_math_lvl3',	'hisp_math_lvl3_4',	'hisp_math_lvl2',	'hisp_math_lvl1',	'pi_math_lvl4',	'pi_math_lvl3',	'pi_math_lvl3_4',	'pi_math_lvl2',	'pi_math_lvl1',	'white_math_lvl4',	'white_math_lvl3',	'white_math_lvl3_4',	'white_math_lvl2',	'white_math_lvl1',	'ed_eng_lvl_4',	'ed_eng_lvl_3',	'ed_eng_lvl_3_4',	'ed_eng_lvl_2',	'ed_eng_lvl_1',	'ed_math_lvl_4',	'ed_math_lvl_3',	'ed_math_lvl_3_4',	'ed_math_lvl_2',	'ed_math_lvl_1',	'el_eng_lvl4',	'el_eng_lvl3',	'el_eng_lvl3_4',	'el_eng_lvl2',	'el_eng_lvl1',	'el_math_lvl4',	'el_math_lvl3',	'el_math_lvl3_4',	'el_math_lvl2',	'el_math_lvl1']
	csv_path = path 
	csv_file = open(csv_path, 'rb')
	csv_obj = csv.DictReader(csv_file)
	csv_list = list(csv_obj)

	#convert numbers to float#
	#for i in range(0,len(csv_list)):
	#	ii = 0
	#	for ii in range(0,len(headers)):
	#		try:
	#			csv_list[i][headers[ii]] = float(csv_list[i][headers[ii]])
	#		except:
	#			csv_list[i][headers[ii]] = ''
	#		ii = ii + 1
	return csv_list

## INDEX PAGE ##
@app.route('/')
def index():
	template = 'index.html'
	raw_data = get_csv('./static/data.csv')
	return render_template(template, home=raw_data[0], data=json.dumps(raw_data[0]))

## SEARCH PAGE ##
@app.route('/search_school_districts.html')
def search():
	template = 'search.html'
	raw_data = get_csv('./static/data.csv')
	return render_template(template, data=raw_data)

## STATE PAGE ##
@app.route('/state.html')
def state():
	template = 'state.html'
	raw_data = get_csv('./static/state.csv')
	return render_template(template, data=raw_data)

## DETAIL PAGE ##
@app.route('/<entity_slug>.html')
def detail(entity_slug):
	template = 'detail.html'
	raw_data = get_csv('./static/data.csv')
	for row in raw_data:
		if row['entity_slug'] == entity_slug:
			return render_template(template, object=row, data=json.dumps(row))
	abort(404)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
