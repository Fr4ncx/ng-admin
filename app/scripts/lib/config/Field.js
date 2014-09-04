define(['lib/config/Configurable'], function (Configurable) {
    'use strict';

    return function(fieldName) {
        var availableTypes = ['number', 'text', 'email', 'date'];
        var availableEditions = ['read-only', 'editable'];
        var name = fieldName || 'field';

        var config = {
            type: 'text',
            label: 'My field',
            edition : 'editable',
            order: null,
            identifier : false,
            list: true,
            dashboard: true,
            validation: {}
        };

        /**
         * @constructor
         */
        function Field() {
            this.value = null;
        }

        Configurable(Field, config);

        /**
         * Object.name is protected, use a getter for it
         *
         * @returns {string}
         */
        Field.getName = function() {
            return name;
        };

        /**
         * Set of get the type
         *
         * @param {String} type
         * @returns string|Field
         */
        Field.type = function(type) {
            if (arguments.length === 0) {
                return config.type;
            }

            if (availableTypes.indexOf(type) === -1) {
                throw new Exception('Type should be one of ' + availableTypes.join(', '));
            }

            config.type = type;

            return this;
        };

        /**
         *
         * @param {String} edition
         * @returns string|Field
         */
        Field.edition = function(edition) {
            if (arguments.length === 0) {
                return config.edition;
            }

            if (availableEditions.indexOf(edition) === -1) {
                throw 'Type should be one of ' + availableTypes.join(', ');
            }

            config.edition = edition;
            return this;
        };

        Field.getValue = function() {
            return this.value;
        };

        Field.setValue = function(v) {
            this.value = v;

            return this;
        };

        return Field;
    }
});