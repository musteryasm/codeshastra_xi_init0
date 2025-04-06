import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import DBSCAN
from scipy.stats import zscore
import seaborn as sns
import matplotlib.pyplot as plt
import plotly.express as px

from flask import jsonify
# from extensions import df

import pandas as pd
df = pd.read_csv("service/invo_10.csv", low_memory=False)
useful_columns = [
    'Timestamp',
    'Invoice_No_',
    'Order_ID_s',
    'Payment_Type',
    'Order_Type',
    'Item_Name',
    'Price',
    'Qty_',
    'Sub_Total',
    'Discount',
    'Tax',
    'Final_Total',
    'Total_z',
    'Total_s',
    'Status',
    'Table_No_',
    'Server_Name',
    'Covers',
    'Phone',
    'Customer_Name_s',
    'Payment_Type_s',
    'Delivery_status_s',
    'Area',
    'Order_From_s',
    'GST',
    'CGST_s',
    'SGST_s',
    'IGST_s',
    'Service_Charge_Amount',
    'Order_Delivery_Time_s',
    'Order_Acceptance_Time_s',
    'Cancelled_Time_s',
    'Zomato_Delivery_Time',
    'Swiggy_Delivery_Time',
    'amount_from',
    'amount_to',

    # Anomaly columns
    'has_anomaly',
    'anomaly_priority',
    'anomaly_payment_mismatch',
    'anomaly_missing_payment_info',
    'anomaly_multiple_payment_types',
    'anomaly_tax_calculation_mismatch',
    'anomaly_zero_tax_on_taxable',
    'anomaly_large_order_modification',
    'anomaly_modification_without_comment',
    'anomaly_zomato_invoice_mismatch',
    'anomaly_swiggy_invoice_mismatch',
    'anomaly_long_zomato_prep_time',
    'anomaly_long_swiggy_prep_time',
    'anomaly_zomato_missing_delivery_time',
    'anomaly_swiggy_missing_delivery_time',
    'anomaly_high_discount',
    'anomaly_discount_without_reason',
    'anomaly_zomato_status_mismatch',
    'anomaly_swiggy_status_mismatch',
    'anomaly_extreme_settlement_time',
    'anomaly_unusual_settlement_time',
    'anomaly_long_bill_settlement',
    'anomaly_missing_server_name',
    'anomaly_zomato_missing_customer',
    'anomaly_swiggy_missing_customer',
    'anomaly_suspicious_pax',
    'anomaly_price_inconsistency',

    # Pattern risk
    'pattern_risk',
    'reason_pattern_risk',
]


def get_daily_sales_data():
    # Load CSV


    # Ensure Timestamp is in datetime format
    df['Timestamp'] = pd.to_datetime(df['Timestamp'])

    # Extract date
    df['date'] = df['Timestamp'].dt.date

    # Group by date to get daily total sales
    daily_sales = df.groupby('date')['Final_Total'].sum().reset_index()

    # Convert DataFrame to list of dictionaries for JSON response
    result = daily_sales.to_dict(orient='records')
    return result

# print(get_daily_sales_data())



def all_data():
    filtered_df = df[useful_columns].copy()

    # Drop columns where all values are NaN, fill remaining NaNs with "Nan", return first 50 rows
    cleaned_df = filtered_df.dropna(axis=1, how='all').fillna("Nan")
    return cleaned_df.head(50).to_dict(orient='records')


