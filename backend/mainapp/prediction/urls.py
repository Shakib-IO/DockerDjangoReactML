from django.urls import path
import prediction.views as views

urlpatterns = [
    path('predict/', views.IRIS_Model_Predict.as_view(), name = 'api_predict'),
]

"""
This is saying that we are adding 'predict' to the 
URL path /api/ so that if we make api URL requests such as http://www.our-final-app.com/api/predict/ 
we would be taken to the IRIS_Model_Predict view, 
from which we should get a predicted response back for a sample iris flower data sent along with the request. 

"""