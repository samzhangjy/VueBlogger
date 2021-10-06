echo "                                                              
    //   ) )  / /        //   ) ) //   ) )  //   / / //   / / 
   //___/ /  / /        //   / / //        //   / / //____    
  / __  (   / /        //   / / //  ____  //   / / / ____     
 //    ) ) / /        //   / / //    / / //   / / //          
//____/ / / /____/ / ((___/ / ((____/ / ((___/ / //____/ /    
                                                                V0.0.1 Alpha
================================================================================"
echo "Removing temporary build directory..."
rm -rf ./dist
# git add .
# git commit -m "Update"
echo "Building website using `yarn build`..."
yarn build
echo "Build completed."
cd dist
echo "Initializing Git repository under ./dist..."
git init
git add .
git commit -m "Update [TOOL]"
echo "Pushing to GitHub..."
git remote add origin git@github.com:samzhangjy/samzhangjy.github.io.git
git push origin master --force
echo "Repository pushed to GitHub."
cd ..
echo "Removing temporary build directory..."
rm -rf ./dist
echo "Build finished! Your website will be live in a few minutes. Enjoy!"