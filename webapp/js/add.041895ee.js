(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["add"],
  {
    "7e55": function (o, r, a) {
      "use strict";
      a.r(r);
      var n = function () {
          var o = this,
            r = o.$createElement,
            a = o._self._c || r;
          return a(
            "div",
            { staticClass: "container-fluid mt-4" },
            [
              a("h2", [o._v("Add Store")]),
              a("p", [
                a("small", [
                  a("code", [o._v("POST " + o._s(o.storesPostEndpoint))]),
                ]),
              ]),
              a("p", [
                a("small", [a("code", [o._v(o._s(o.storesPostBody))])]),
              ]),
              a("hr"),
              a(
                "b-form",
                [
                  a(
                    "b-form-group",
                    { attrs: { label: "Name:", "label-for": "storeName" } },
                    [
                      a("b-form-input", {
                        attrs: { id: "storeName" },
                        model: {
                          value: o.form.storeName,
                          callback: function (r) {
                            o.$set(o.form, "storeName", r);
                          },
                          expression: "form.storeName",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Description:",
                        "label-for": "storeDescription",
                      },
                    },
                    [
                      a("b-form-input", {
                        attrs: { id: "storeDescription" },
                        model: {
                          value: o.form.storeDescription,
                          callback: function (r) {
                            o.$set(o.form, "storeDescription", r);
                          },
                          expression: "form.storeDescription",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    {
                      attrs: { label: "Store Type:", "label-for": "storeType" },
                    },
                    [
                      a("b-form-input", {
                        attrs: { id: "storeType" },
                        model: {
                          value: o.form.storeType,
                          callback: function (r) {
                            o.$set(o.form, "storeType", r);
                          },
                          expression: "form.storeType",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    { attrs: { label: "City:", "label-for": "storeCity" } },
                    [
                      a("b-form-input", {
                        attrs: { id: "storeCity" },
                        model: {
                          value: o.form.storeCity,
                          callback: function (r) {
                            o.$set(o.form, "storeCity", r);
                          },
                          expression: "form.storeCity",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Country:",
                        "label-for": "storeCountry",
                      },
                    },
                    [
                      a("b-form-input", {
                        attrs: { id: "storeCountry" },
                        model: {
                          value: o.form.storeCountry,
                          callback: function (r) {
                            o.$set(o.form, "storeCountry", r);
                          },
                          expression: "form.storeCountry",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    { attrs: { label: "State:", "label-for": "storeState" } },
                    [
                      a("b-form-input", {
                        attrs: { id: "storeState" },
                        model: {
                          value: o.form.storeState,
                          callback: function (r) {
                            o.$set(o.form, "storeState", r);
                          },
                          expression: "form.storeState",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Neighborhood:",
                        "label-for": "storeNeighborhood",
                      },
                    },
                    [
                      a("b-form-input", {
                        attrs: { id: "storeNeighborhood" },
                        model: {
                          value: o.form.storeNeighborhood,
                          callback: function (r) {
                            o.$set(o.form, "storeNeighborhood", r);
                          },
                          expression: "form.storeNeighborhood",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    [
                      a(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function (r) {
                              return r.preventDefault(), o.postStores();
                            },
                          },
                        },
                        [o._v("POST /stores")]
                      ),
                      a("b-spinner", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: o.loading,
                            expression: "loading",
                          },
                        ],
                        attrs: { small: "", label: "Loading.." },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        t = [],
        e = a("bc3a"),
        i = a.n(e),
        d = {
          name: "Add",
          data: function () {
            return {
              form: {
                storeName: "",
                storeDescription: "",
                storeType: "",
                storeCity: "",
                storeCounty: "",
                storeState: "",
                storeNeighborhood: "",
              },
              loading: !1,
              storesEndpoint: localStorage.hasOwnProperty("storesEndpoint")
                ? localStorage.getItem("storesEndpoint")
                : "",
            };
          },
          computed: {
            storesPostEndpoint: function () {
              return this.storesEndpoint + "stores";
            },
            storesPostBody: function () {
              return {
                storeName: this.form.storeName,
                description: this.form.storeDescription,
                family: this.form.storeType,
                city: this.form.storeCity,
                state: this.form.storeState,
                neighborhood: this.form.storeNeighborhood,
                country: this.form.storeCountry,
                reportingPhoneNumber: "15555555555",
                confirmationRequired: !1,
              };
            },
          },
          methods: {
            postStores: function () {
              var o = this;
              (this.loading = !0),
                i.a.post(this.storesPostEndpoint, this.storesPostBody).then(
                  function (r) {
                    (o.loading = !1),
                      (o.form.storeName = ""),
                      (o.form.storeDescription = ""),
                      (o.form.storeType = ""),
                      (o.form.storeCity = ""),
                      (o.form.storeState = ""),
                      (o.form.storeNeighborhood = ""),
                      (o.form.storeCountry = "");
                  },
                  function (r) {
                    alert(r), (o.loading = !1);
                  }
                );
            },
          },
        },
        s = d,
        g = a("2877"),
        l = Object(g["a"])(s, n, t, !1, null, null, null);
      r["default"] = l.exports;
    },
  },
]);
