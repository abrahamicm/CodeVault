aqui hay tutorial web sobre esto

[businessbloomer](https://www.businessbloomer.com/woocommerce-easily-get-product-info-title-sku-desc-product-object/)

~~~php
// Get $product object from product ID
  
$product = wc_get_product( $product_id );
  
// Now you have access to (see above)...
  
$product->get_type();
$product->get_name();
// etc.
// etc.

~~~

desde fuera de wordpress de puede usar esta [alternativa](https://stackoverflow.com/questions/41730193/using-wc-get-product-with-a-php-variable-for-product-id)

~~~php 
$_product = new WC_Product($courseID);
~~~

este ejemplo funciona en codesnipet

~~~php 
$p = new WC_Product(16);
print_r($p->get_name());
$p->set_name("otro nombre");
$p->save();
print_r($p->get_name());
die();
~~~
[clase WC-Product](https://woocommerce.github.io/code-reference/classes/WC-Product.html)

~~~html
$$(".phpdocumentor-table-of-contents__entry a").forEach( (x,y) => console.log(y+ ".", x.innerText) )

~~~

### resumen de propiedades

1. get_categories()
2. get_category_ids()
3. save()
4. set_category_ids()
5. set_props()
6. set_sale_price()
7. set_status()
8. set_stock()
9. set_stock_quantity()
10. set_stock_status()


todas las propiedades

0. $cache_group
1. $changes
2. $data
3. $data_store
4. $default_data
5. $extra_data
6. $id
7. $meta_data
8. $object_read
9. $object_type
10. $post_type
11. $supports
12. __clone()
13. __construct()
14. __get()
15. __isset()
16. __sleep()
17. __toString()
18. __wakeup()
19. add_meta_data()
20. add_to_cart_description()
21. add_to_cart_text()
22. add_to_cart_url()
23. adjust_price()
24. apply_changes()
25. backorders_allowed()
26. backorders_require_notification()
27. check_stock_status()
28. child_has_dimensions()
29. child_has_weight()
30. delete()
31. delete_meta_data()
32. delete_meta_data_by_mid()
33. enable_dimensions_display()
34. exists()
35. get_attribute()
36. get_attributes()
37. get_availability()
38. get_average_rating()
39. get_backorders()
40. get_catalog_visibility()
41. get_categories()
42. get_category_ids()
43. get_changes()
44. get_child()
45. WC_Product
46. get_children()
47. get_cross_sell_ids()
48. get_cross_sells()
49. get_data()
50. get_data_keys()
51. get_data_store()
52. get_date_created()
53. WC_DateTime
54. get_date_modified()
55. WC_DateTime
56. get_date_on_sale_from()
57. WC_DateTime
58. get_date_on_sale_to()
59. WC_DateTime
60. get_default_attributes()
61. get_description()
62. get_dimensions()
63. get_display_price()
64. get_download_expiry()
65. get_download_limit()
66. get_downloadable()
67. get_downloads()
68. get_extra_data_keys()
69. get_featured()
70. get_file()
71. get_file_download_path()
72. get_files()
73. get_formatted_name()
74. get_formatted_variation_attributes()
75. get_gallery_attachment_ids()
76. get_gallery_image_ids()
77. get_height()
78. get_id()
79. get_image()
80. get_image_id()
81. get_length()
82. get_low_stock_amount()
83. get_manage_stock()
84. get_matching_variation()
85. get_max_purchase_quantity()
86. get_menu_order()
87. get_meta()
88. get_meta_data()
89. get_min_purchase_quantity()
90. get_name()
91. get_object_read()
92. get_parent()
93. get_parent_id()
94. get_permalink()
95. get_post_data()
96. get_post_password()
97. get_price()
98. get_price_excluding_tax()
99. get_price_html()
100. get_price_html_from_text()
101. get_price_html_from_to()
102. get_price_including_tax()
103. get_price_suffix()
104. get_purchase_note()
105. get_rating_count()
106. get_rating_counts()
107. get_rating_html()
108. get_regular_price()
109. get_related()
110. get_review_count()
111. get_reviews_allowed()
112. get_sale_price()
113. get_shipping_class()
114. get_shipping_class_id()
115. get_short_description()
116. get_sku()
117. get_slug()
118. get_sold_individually()
119. get_status()
120. get_stock_managed_by_id()
121. get_stock_quantity()
122. get_stock_status()
123. get_tag_ids()
124. get_tags()
125. get_tax_class()
126. get_tax_status()
127. get_title()
128. get_total_sales()
129. get_total_stock()
130. get_type()
131. get_upsell_ids()
132. get_upsells()
133. get_variation_default_attributes()
134. get_variation_description()
135. get_variation_id()
136. get_virtual()
137. get_weight()
138. get_width()
139. grouped_product_sync()
140. has_all_attributes_set()
141. has_attributes()
142. has_child()
143. has_default_attributes()
144. has_dimensions()
145. has_enough_stock()
146. has_file()
147. has_options()
148. has_weight()
149. increase_stock()
150. is_downloadable()
151. is_featured()
152. is_in_stock()
153. is_on_backorder()
154. is_on_sale()
155. is_purchasable()
156. is_shipping_taxable()
157. is_sold_individually()
158. is_taxable()
159. is_type()
160. is_virtual()
161. is_visible()
162. list_attributes()
163. managing_stock()
164. meta_exists()
165. needs_shipping()
166. parent_is_visible()
167. read_meta_data()
168. reduce_stock()
169. save()
170. save_meta_data()
171. set_attributes()
172. set_average_rating()
173. set_backorders()
174. set_catalog_visibility()
175. set_category_ids()
176. set_cross_sell_ids()
177. set_date_created()
178. set_date_modified()
179. set_date_on_sale_from()
180. set_date_on_sale_to()
181. set_default_attributes()
182. set_defaults()
183. set_description()
184. set_download_expiry()
185. set_download_limit()
186. set_downloadable()
187. set_downloads()
188. set_featured()
189. set_gallery_image_ids()
190. set_height()
191. set_id()
192. set_image_id()
193. set_length()
194. set_low_stock_amount()
195. set_manage_stock()
196. set_menu_order()
197. set_meta_data()
198. set_name()
199. set_object_read()
200. set_parent_id()
201. set_post_password()
202. set_price()
203. set_props()
204. set_purchase_note()
205. set_rating_counts()
206. set_regular_price()
207. set_review_count()
208. set_reviews_allowed()
209. set_sale_price()
210. set_shipping_class_id()
211. set_short_description()
212. set_sku()
213. set_slug()
214. set_sold_individually()
215. set_status()
216. set_stock()
217. set_stock_quantity()
218. set_stock_status()
219. set_tag_ids()
220. set_tax_class()
221. set_tax_status()
222. set_total_sales()
223. set_upsell_ids()
224. set_virtual()
225. set_weight()
226. set_width()
227. single_add_to_cart_text()
228. supports()
229. sync_attributes()
230. sync_average_rating()
231. sync_rating_count()
232. update_meta_data()
233. validate_props()
234. variable_product_sync()
235. build_related_query()
236. error()
237. filter_null_meta()
238. get_availability_class()
239. get_availability_text()
240. get_hook_prefix()
241. get_prop()
242. get_related_terms()
243. get_valid_tax_classes()
244. is_internal_meta_key()
245. is_visible_core()
246. maybe_defer_product_sync()
247. maybe_read_meta_data()
248. set_date_prop()


