// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Service to create the question.
 */

require('domain/utilities/url-interpolation.service.ts');

angular.module('oppia').factory('QuestionCreationService', [
  '$http', '$q',
  function($http, $q) {
    var QUESTION_CREATOR_URL = '/question_editor_handler/create_new';

    var _createNew = function(
        backendQuestionDict, successCallback, errorCallback) {
      var postData = {
        question_dict: backendQuestionDict
      };
      $http.post(QUESTION_CREATOR_URL, postData).then(function(response) {
        if (successCallback) {
          successCallback();
        }
      }, function(errorResponse) {
        if (errorCallback) {
          errorCallback(errorResponse.data);
        }
      });
    };

    return {
      createNew: function(backendQuestionDict) {
        return $q(function(resolve, reject) {
          _createNew(backendQuestionDict, resolve, reject);
        });
      }
    };
  }
]);
