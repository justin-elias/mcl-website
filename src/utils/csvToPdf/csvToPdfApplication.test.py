import unittest
import csvToPdfApplication


class IsCsvDataEqual(unittest.TestCase):
    def test_if_csv_import_data_equal(self):
        test_data = [{'appType': 'new', 'memberType': 'regular', 'lastName': 'Lappe', 'firstName': 'Jay',
                      'dateEnlistCommission': '1997-05-07', 'eas': '2021-09-30', 'felony': 'no', 'dob': '1973-10-08',
                      'phone': '9496901161', 'email': 'jalappe@gmail.com', 'streetAddress': '295 Isaiah Trail',
                      'city': 'Belgrade', 'state': 'MT', 'zipCode': '59714'},
                     {'appType': 'new', 'memberType': 'regular', 'lastName': 'MCKINNEY', 'firstName': 'JOSHUA',
                      'dateEnlistCommission': '2004-01-21', 'eas': '2008-01-22', 'felony': 'no', 'dob': '1984-05-16',
                      'phone': '9043275890', 'email': 'MCKINNEYJM314@GMAIL.COM', 'streetAddress': '2511 DAFFODIL ST.',
                      'city': 'BOZEMAN', 'state': 'MT', 'zipCode': '59718'}]
        self.assertEqual(test_data, csvToPdfApplication.get_csv_data('/Users/justinelias/Desktop/mcl-website/Output/2021-11-30_11:43_membershipUpdates.csv'))


if __name__ == '__main__':
    unittest.main()
