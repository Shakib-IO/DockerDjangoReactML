from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views APIView
from prediction.apps import PredictionConfig
import pandas as pd



"""
Basically this view takes JSON input data from a URL request(which we would define below), 
processes the data and makes prediction from the loaded machine learning model defined in the apps.py file
"""
# Create your views here.
class IRIS_Model_Predict(APIVIEW):
    def post(self , request , format = None):
        data = request.data
        keys = []
        values = []
        for key in data:
            keys.append(key)
            values.append(data[key])
        X = pd.Series(values).to_numpy().reshape(1 , -1)
        loaded_mlmodel = PredictionConfig.mlmodel
        y_pred = loaded_mlmodel.predict(X)
        y_pred = pd.Series(y_pred)
        target_map = {0 : 'setosa' , 1 : 'versicolor' , 2 : 'virginica'}
        y_pred = y_pred.map(target_map).to_numpy()
        response_dict = {"Predicted Iris Species" : y_pred[0] }
        return Response(response_dict , status=200)