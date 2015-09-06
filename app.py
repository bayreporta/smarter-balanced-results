import csv
import json
from flask import Flask
from flask import render_template
app = Flask(__name__)

## GET CSV ##
def get_csv():
	csv_path = './static/data.csv' 
	csv_file = open(csv_path, 'rb')
	csv_obj = csv.DictReader(csv_file)
	csv_list = list(csv_obj)
	return csv_list

## INDEX PAGE ##
@app.route('/')
def index():
	template = 'index.html'
	raw_data = get_csv()
	return render_template(template, home=raw_data[0], data=json.dumps(raw_data[0]))

## SEARCH PAGE ##
@app.route('/search')
def search():
	template = 'search.html'
	raw_data = get_csv()
	return render_template(template, data=raw_data)

## DETAIL PAGE ##
@app.route('/<entity_slug>')
def detail(entity_slug):
	template = 'detail.html'
	raw_data = get_csv()
	for row in raw_data:
		if row['entity_slug'] == entity_slug:
			return render_template(template, object=row, data=json.dumps(row))
	abort(404)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
