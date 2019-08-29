module.exports = {
  plugins: [
		require('autoprefixer'),
		require('cssnano'),
		require('css-mqpacker')({
			preset:[
				'default', {
					discardComments:{
						removeAll: true,
					}
				}
			]
		})

  ]
}