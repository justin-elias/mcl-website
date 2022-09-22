const csvFilePath="2022-9-21_21:27_membershipUpdates.csv"
const csv=require('csvtojson')
const pdfFiller   = require('pdffiller');

const nameRegex=null
const template = "./mcl1050_membership_application_2020_fillable.pdf"

const formatPhoneNumber = async (str) => {
  //Filter only numbers from the input
  const cleaned = ('' + str).replace(/\D/g, '');

  //Check if the input is of correct
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    //Remove the matched extension code
    //Change this to format for any country code.
    const intlCode = (match[1] ? '+1 ' : '')
    return [intlCode, ' ', match[2], '-', match[3], '-', match[4]].join('');
  }

  return null;
}

const fillPdf = async (template) => {
  const data = await csv().fromFile(csvFilePath)
  console.log(data)
  for (const row of data) {
    row.fullName = row.firstName + " " + row.lastName
    row.felony = row.felony ? "yes" : "no"
    row.phone = await formatPhoneNumber(row.phone)
    row.duesAmt = row.appType == 'new' ? 35 : 30
    // console.log(row.phone)
    const output = "./output/" + row.lastName + "_" + row.firstName + ".pdf"
    await pdfFiller.fillForm(template, output, row, function (err) {
      if (err) throw err;
      console.log(row.fullName + " filled")
    })
  }
}
fillPdf(template).then(() => {console.log(" All done")})


// fdf and field data examples
const fdf = {
  phone: '',
  streetAddress: '',
  city: '',
  state: '',
  dob: '',
  email: '',
  dateEnlistCommission: '',
  eas: '',
  felony: '',
  duesAmt: '',
  detachmentMember: '',
  zipCode: '',
  firstName: '',
  lastName: '',
  fullName: '',
  appType: '',
  memberType: ''
}

const fieldData = [
  {
    title: 'phone',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  {
    title: 'streetAddress',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  { title: 'city', fieldType: 'Text', fieldFlags: '0', fieldValue: '' },
  {
    title: 'state',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  { title: 'dob', fieldType: 'Text', fieldFlags: '0', fieldValue: '' },
  {
    title: 'email',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  {
    title: 'dateEnlistCommission',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  { title: 'eas', fieldType: 'Text', fieldFlags: '0', fieldValue: '' },
  {
    title: 'felony',
    fieldType: 'Button',
    fieldFlags: '49152',
    fieldValue: ''
  },
  {
    title: 'duesAmt',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  {
    title: 'detachmentMember',
    fieldType: 'Button',
    fieldFlags: '49152',
    fieldValue: ''
  },
  {
    title: 'zipCode',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  {
    title: 'firstName',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  {
    title: 'lastName',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  {
    title: 'fullName',
    fieldType: 'Text',
    fieldFlags: '0',
    fieldValue: ''
  },
  {
    title: 'appType',
    fieldType: 'Button',
    fieldFlags: '49152',
    fieldValue: ''
  },
  {
    title: 'memberType',
    fieldType: 'Button',
    fieldFlags: '49152',
    fieldValue: ''
  }
]
