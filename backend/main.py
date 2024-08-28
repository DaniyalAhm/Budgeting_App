from flask import Flask, render_template, jsonify
from flask_cors import CORS
import pandas as pd
app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/*": {"origins": ["http://localhost:3000/" ]}})

card1= pd.read_csv('/home/daniyal/Frontend-Practice/backend/Credit_Card_Transactions_Data_with_Date.csv')
def monthly_spending(data, transaction_date_col="Transaction Date", payment_amount_col="Payment Amount"):
    # Ensure the Transaction Date column is in datetime format
    data[transaction_date_col] = pd.to_datetime(data[transaction_date_col])
    
    # Grouping by month and summing up the payment amounts
    monthly_spending = data.groupby(data[transaction_date_col].dt.to_period('M'))[payment_amount_col].sum()
    
    # Convert the monthly spending series to a list
    monthly_spending_list = monthly_spending.tolist()
    
    return monthly_spending_list


def classify_and_return_top_store_sales(data):
    # Ensure 'Transaction Date' is in datetime format
    data['Transaction Date'] = pd.to_datetime(data['Transaction Date'])

    # Find the top 3 store types by frequency
    top_store_types = data['Store Type'].value_counts().head(3).index

    # Filter the data to include only the top 3 store types
    top_store_data = data[data['Store Type'].isin(top_store_types)]

    # Extract month and year from the transaction date
    top_store_data['Year-Month'] = top_store_data['Transaction Date'].dt.to_period('M')

    # Group by store type and month, then sum the payment amounts
    monthly_sales = top_store_data.groupby(['Year-Month', 'Store Type'])['Payment Amount'].sum().unstack()

    # Convert the DataFrame to three separate lists for each top store type
    store_sales_lists = {}
    for store in top_store_types:
        store_sales_lists[store] = monthly_sales[store].fillna(0).tolist()

    return list(store_sales_lists.keys()), list(store_sales_lists.values())[0], list(store_sales_lists.values())[1], list(store_sales_lists.values())[2]

@app.route('/', methods=['GET'])
def index():
    by_month = monthly_spending(card1)
    store_types, store_1_sales, store_2_sales, store_3_sales = classify_and_return_top_store_sales(card1)

    response = {
        'first': [x for x in range(1, 13)],  # Assuming 1 to 12 represent months
        'second': by_month,
        'third': ['MasterCard', 'Visa', "Yourmother"],
       'fourth': {
            'store_types': store_types,
            'store_1_sales': store_1_sales,
            'store_2_sales': store_2_sales,
            'store_3_sales': store_3_sales
        }
    }

    print(response['fourth'])


    return jsonify(response)






if __name__ == "__main__":
    print(classify_and_return_top_store_sales(card1))
    app.run(debug=True)

