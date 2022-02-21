echo '                                                             
  _   __         ___  __                      
 | | / /_ _____ / _ )/ /__  ___ ____ ____ ____
 | |/ / // / -_) _  / / _ \/ _ `/ _ `/ -_) __/
 |___/\_,_/\__/____/_/\___/\_, /\_, /\__/_/   
                          /___//___/     
            
For geeks who wanted to write their blog site in Vue                      V0.1.0
================================================================================'
echo Please enter your GitHub pages repository push URL: 
read repo_link

if [[ -n $repo_link ]]
then

  echo "Removing temporary build directory..."
  rm -rf ./dist

  echo "Building website using `yarn build`..."
  yarn build
  echo "Build completed."
  cd dist
  echo "Initializing Git repository under ./dist..."
  git init
  git add .
  git commit -m "Update [TOOL]"
  echo "Pushing to GitHub..."
  git remote add origin $repo_link
  git push origin master --force
  echo "Repository pushed to GitHub."
  cd ..
  echo "Removing temporary build directory..."
  rm -rf ./dist
  echo "Build finished! Your website will be live in a few minutes. Enjoy!"

else 
  echo "! Repo link required !"
fi
