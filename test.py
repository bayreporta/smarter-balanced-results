import csv

## GET CSV ##
def get_csv():
	csv_path = './static/data.csv' 
	csv_file = open(csv_path, 'rb')
	csv_obj = csv.DictReader(csv_file)
	csv_list = list(csv_obj)
	return csv_list

## INDEX PAGE ##
object_list = get_csv()
print object_list


