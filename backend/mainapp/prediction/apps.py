from django.apps import AppConfig
import pandas as pd
from joblib import load
import os

class PredictionConfig(AppConfig):
    name = 'prediction'
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    MLMODEL_FOLDER = os.path.join(BASE_DIR , 'prediction/mlmodel')
    MLMODEL_FILE = os.path.join(MLMODEL_FOLDER , "IRISRandomForestClassifier.joblib")
    mlmodel = load(MLMODEL_FILE)

"""The reason we are loading the ml model in our apps.py file is that in this manner 
    # the classifier is loaded only once, when a session connection is made to our Django application, reducing overhead. 
    # We are loading the trained and saved classifier back into memory with the 'joblib' load method as suggested by the official scikit-learn
    #https://scikit-learn.org/stable/modules/model_persistence.html """