# %%
import numpy as np  
import pandas as pd     

# %%
df = pd.read_csv('stroke_prediction_dataset.csv')
df

# %%
df.drop(columns=['Patient ID','Patient Name'], inplace=True)
df

# %%
categorical_columns = df.select_dtypes(include=['object']).columns
categorical_columns

# %%
for i in categorical_columns:
    print(f"{df[i].nunique()} unique values in {i} column")

# %%
categorical_columns_with_100_unique_values = [i for i in categorical_columns if df[i].nunique() > 100]
categorical_columns = [i for i in categorical_columns if df[i].nunique() < 100]

categorical_columns_with_100_unique_values

# %%
categorical_columns.remove('Diagnosis')
categorical_columns

# %%
df.drop(columns=categorical_columns_with_100_unique_values, inplace=True)
df.shape

# %%
x_df = df[df.columns[:-1]]
y_df = df[df.columns[-1]]

# %%
from sklearn.preprocessing import LabelEncoder,OneHotEncoder
label_encoder = LabelEncoder()
onehot_encoder = OneHotEncoder()



# %%
x_encoded_array = onehot_encoder.fit_transform(x_df[categorical_columns]).toarray()
x_encoded_df = pd.DataFrame(x_encoded_array, columns=onehot_encoder.get_feature_names_out(categorical_columns))
y_label_encoder = label_encoder.fit_transform(y_df)

x_encoded_df.shape

# %%
y_encoded = label_encoder.fit_transform(y_df)
y_encoded.shape

# %%
from sklearn.model_selection import train_test_split


X_train, X_test, y_train, y_test = train_test_split(x_encoded_df, y_encoded, test_size=0.33, random_state=42)
X_train.shape, X_test.shape, y_train.shape, y_test.shape

# %%
from sklearn.metrics import accuracy_score
from sklearn.ensemble import RandomForestClassifier


rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train,y_train)
rf_pred_x_encoded_test = rf.predict(X_test)
accuracy_score(y_test, rf_pred_x_encoded_test)

# %%
from sklearn.linear_model import LogisticRegression


rf = LogisticRegression()
rf.fit(X_train,y_train)
rf_pred_x_encoded_test = rf.predict(X_test)
accuracy_score(y_test, rf_pred_x_encoded_test)

# %%



