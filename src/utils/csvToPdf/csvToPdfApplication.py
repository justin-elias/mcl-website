# import a csv file from /Output/ using the file name provided in argv[1]
import csv
import pdfrw

ANNOT_KEY = '/Annots'
ANNOT_FIELD_KEY = '/T'
ANNOT_VAL_KEY = '/V'
ANNOT_RECT_KEY = '/Rect'
SUBTYPE_KEY = '/Subtype'
WIDGET_SUBTYPE_KEY = '/Widget'

LOCK_EDIT = ['duesAmt']


def get_csv_data(csv_file_name):
    # add the file name to the path
    # open the csv file
    with open(csv_file_name, 'r') as csvFile:
        # read the csv file
        csvFileReader = csv.reader(csvFile)
        # create a list of the csv file
        csvFileList = list(csvFileReader)
        # create a list of the headers
        headers = csvFileList[0]
        # create a list of the data
        data_dict = csvFileList[1:]
        # create a list of the data
        data_dict = [dict(zip(headers, row)) for row in data_dict]

        # append fullName to the data_dict
        for row in data_dict:
            row['fullName'] = row['firstName'] + ' ' + row['lastName']

            if row['appType'] == 'new':
                row['duesAmt'] = '35'
            elif row['appType'] == 'renewal':
                row['duesAmt'] = '30'

        return data_dict


# function to fill the pdf file with the data from the csv file using pdfrw
def fill_pdf(input_pdf_path, data_dict, output_pdf_path, ):
    template_pdf = pdfrw.PdfReader(input_pdf_path)
    for row in data_dict:
        for page in template_pdf.pages:
            annotations = page[ANNOT_KEY]
            for annotation in annotations:
                if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
                    if annotation[ANNOT_FIELD_KEY]:
                        key = annotation[ANNOT_FIELD_KEY][1:-1]
                        if key in row:
                            if type(row[key]) == bool:
                                if row[key]:
                                    annotation.update(pdfrw.PdfDict(AS=pdfrw.PdfName.Yes))
                            else:
                                annotation.update(
                                    pdfrw.PdfDict(V='{}'.format(row[key]), AP='')
                                )
                                if key in LOCK_EDIT:
                                    annotation.update(pdfrw.PdfDict(Ff=1))
        template_pdf.Root.AcroForm.update(pdfrw.PdfDict(NeedAppearances=pdfrw.PdfObject('true')))
        pdfrw.PdfWriter().write(output_pdf_path + row['lastName'] + '_' + row['firstName'] + '.pdf', template_pdf)


if __name__ == '__main__':
    import sys

    print(fill_pdf(sys.argv[1], get_csv_data(sys.argv[2]), sys.argv[3]))
